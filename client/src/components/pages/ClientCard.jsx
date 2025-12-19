import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import axiosInstance from '../../api/axiosInstance';

const STAGES = [
  'Приглашение отправлено',
  'Скрининг / звонок',
  'Интервью',
  'Тестовое задание',
  'Оффер',
  'Вышел на работу',
  'Отказ',
];

const pageStyles = {
  headerWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '18px',
    flexWrap: 'wrap',
  },
  title: {
    margin: 0,
    fontSize: '28px',
    fontWeight: 700,
    letterSpacing: '0.2px',
    color: '#111827',
  },
  subtitle: {
    margin: '6px 0 0',
    fontSize: '14px',
    color: '#6b7280',
  },
  panel: {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '16px',
    boxShadow: '0 6px 18px rgba(17, 24, 39, 0.06)',
    marginBottom: '18px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: '12px',
  },
  col6: { gridColumn: 'span 6' },
  col4: { gridColumn: 'span 4' },
  col8: { gridColumn: 'span 8' },
  col12: { gridColumn: 'span 12' },
  helperRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginTop: '10px',
    flexWrap: 'wrap',
  },
  count: {
    marginTop: '12px',
    fontSize: '13px',
    color: '#6b7280',
  },
  card: {
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 6px 16px rgba(17, 24, 39, 0.06)',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '14px 16px',
    background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
    borderBottom: '1px solid #eef2f7',
  },
  candidateName: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 700,
    color: '#111827',
    lineHeight: 1.2,
  },
  position: {
    margin: '6px 0 0',
    fontSize: '13px',
    color: '#6b7280',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '10px',
    flexWrap: 'wrap',
  },
  listItemLabel: { color: '#6b7280', fontSize: '12px', marginRight: '6px' },
  listItemValue: { color: '#111827', fontSize: '13px', fontWeight: 600 },
  cardBody: { padding: '14px 16px' },
  actionRow: { display: 'flex', gap: '10px', justifyContent: 'flex-end' },
  emptyState: {
    padding: '18px',
    border: '1px dashed #d1d5db',
    borderRadius: '16px',
    background: '#fafafa',
    color: '#6b7280',
    textAlign: 'center',
  },
};
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router';
import '../pages/ClientCard.css';

const stageBadgeVariant = (stage) => {
  if (stage === 'Отказ') return 'secondary';
  if (stage === 'Вышел на работу') return 'success';
  if (stage === 'Оффер') return 'primary';
  return 'info';
};

function CardPage() {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const fetchCards = async () => {
    try {
      const { data } = await axiosInstance.get('/clientscard');
      setCards(data);
    } catch (err) {
      console.error('Ошибка загрузки кандидатов:', err);
    }
  };

  useEffect(() => {
    axios
      .get('/api/clientscard')
      .then((res) => res.json())
      .then((data) => setCards(data));
    fetchCards();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = String(formData.get('fullName') || '').trim();
    const position = String(formData.get('position') || '').trim();
    const contact = String(formData.get('contact') || '').trim();
    const stage = String(formData.get('stage') || '').trim();
    axiosInstance
      .post('/clientscard', )
      .then((res) => res.json())
      .then((data) => setCards(data));

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    await axiosInstance.post('/clientscard', data);
    navigate('/');
  };

  const deleteHandler = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <Container>
      {/* ===== Header ===== */}
      <div className="client-header">
        <div>
          <h2 className="client-title">Кандидаты</h2>
          <div className="client-subtitle">
            Добавляй кандидатов, отслеживай этап и контакты — всё в одном месте.
          </div>
        </div>

        <Button
          onClick={() => setShowForm((s) => !s)}
          variant={showForm ? 'outline-secondary' : 'primary'}
        >
          {showForm ? 'Закрыть форму' : 'Добавить кандидата'}
        </Button>
      </div>

      {/* ===== Form ===== */}
      {showForm && (
        <div className="client-panel">
          <Form onSubmit={submitHandler}>
            <div className="client-form-grid">
              <div className="col-6">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" name="name" placeholder="Фуллстак" required />
              </div>

              <div className="col-6">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" name="surname" placeholder="Фуллстакович" required />
              </div>

              <div className="col-8">
                <Form.Label>Позиция</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  placeholder="Senior FullStack Developer"
                  required
                />
              </div>

              <div className="col-8">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="text" name="phone" placeholder="+7 900 000 00 00" required />
              </div>

              <div className="col-12">
                <div className="client-helper-row">
                  <div className="text-muted" style={{ fontSize: '13px' }}>
                    После создания вы будете перенаправлены на страницу с этапами отбора кандидата.
                  </div>
                  <Button type="submit" variant="success">
                    Создать
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}

      {/* ===== Empty state ===== */}
      {cards.length === 0 ? (
        <div className="client-empty">
          Пока нет кандидатов. Нажми <b>«Добавить кандидата»</b>, чтобы создать первую карточку.
        </div>
      ) : (
        <>
          <Row>
            {cards.map((card) => (
              <Col sm={6} lg={4} key={card.id} className="mb-3">
                <Card className="client-card">
                  <div className="client-card-header">
                    <p className="client-candidate-name">
                      {card.name} {card.surname}
                    </p>
                    <p className="client-position">{card.position}</p>

                    <div className="client-meta-row">
                      <Badge bg={stageBadgeVariant(card.stage)}>{card.stage}</Badge>
                      <span className="text-muted" style={{ fontSize: '12px' }}>
                        ID: {card.id}
                      </span>
                    </div>
                  </div>

                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span className="client-list-label">Телефон:</span>
                      <span className="client-list-value">{card.phone}</span>
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Body className="client-card-body">
                    <div className="client-action-row">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => deleteHandler(card.id)}
                      >
                        Удалить
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="client-count">Всего кандидатов: {cards.length}</div>
        </>
      )}
    </Container>
  );
}

export default CardPage;
