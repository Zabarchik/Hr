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
    boxShadow: '0 8px 24px rgba(220, 38, 38, 0.15)',
    background: 'linear-gradient(180deg, #ffffff 0%, #fef2f2 100%)',
    overflow: 'hidden',
  },
  cardHeader: {
    padding: '14px 16px',
    background: 'linear-gradient(180deg, #fef2f2 0%, #ffffff 100%)',
    borderBottom: '1px solid #fee2e2',
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

const stageBadgeVariant = (stage) => {
  if (stage === 'Отказ') return 'secondary';
  if (stage === 'Вышел на работу') return 'success';
  if (stage === 'Оффер') return 'primary';
  return 'info';
};

const santaInputStyle = {
  backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/1684/1684375.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px top -2px',
  backgroundSize: '22px',
  paddingRight: '38px',
};

const snowStyles = {
  snowWrapper: {
    pointerEvents: 'none',
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    overflow: 'hidden',
  },
  snowflake: {
    position: 'absolute',
    top: '-10%',
    color: 'white',
    opacity: 0.8,
    animation: 'snowfall linear infinite',
  },
};

const Snow = () => (
  <div style={snowStyles.snowWrapper}>
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        style={{
          ...snowStyles.snowflake,
          left: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 10 + 10}px`,
          animationDuration: `${Math.random() * 10 + 10}s`,
        }}
      >
        ❄
      </span>
    ))}
  </div>
);

function CardPage() {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .post('/api/clientscard')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = String(formData.get('fullName') || '').trim();
    const position = String(formData.get('position') || '').trim();
    const contact = String(formData.get('contact') || '').trim();
    const stage = String(formData.get('stage') || '').trim();

    axios
      .post('/api/clientscard')
      .then((res) => res.json())
      .then((data) => setCards(data));

    if (!fullName || !position || !contact || !stage) return;

    setCards((prev) => [...prev, { id: Date.now(), fullName, position, contact, stage }]);

    e.target.reset();
    setShowForm(false);
  };

  const deleteHandler = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <>
      <style>
        {`
          @keyframes snowfall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(110vh); opacity: 0; }
          }
        `}
      </style>

      <Snow />

      <Container>
        <div style={pageStyles.headerWrap}>
          <div>
            <h2 style={pageStyles.title}>Кандидаты </h2>
            <div style={pageStyles.subtitle}>
              Добавляй кандидатов и встречай Новый год с порядком ✨
            </div>
          </div>

          <Button
            onClick={() => setShowForm((s) => !s)}
            variant={showForm ? 'outline-secondary' : 'primary'}
          >
            {showForm ? 'Закрыть форму' : 'Добавить кандидата'}
          </Button>
        </div>

        {showForm && (
          <div style={pageStyles.panel}>
            <Form onSubmit={submitHandler}>
              <div style={pageStyles.formGrid}>
                <div style={pageStyles.col6}>
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    style={{ fontSize: '12px', ...santaInputStyle }}
                  />
                </div>

                <div style={pageStyles.col6}>
                  <Form.Label>Позиция</Form.Label>
                  <Form.Control
                    type="text"
                    name="position"
                    style={{ fontSize: '12px', ...santaInputStyle }}
                  />
                </div>

                <div style={pageStyles.col8}>
                  <Form.Label>Контакт</Form.Label>
                  <Form.Control
                    type="text"
                    name="contact"
                    style={{ fontSize: '12px', ...santaInputStyle }}
                  />
                </div>

                <div style={pageStyles.col4}>
                  <Form.Label>Этап</Form.Label>
                  <Form.Select name="stage" defaultValue={STAGES[0]}>
                    {STAGES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </Form.Select>
                </div>

                <div style={pageStyles.col12}>
                  <div style={pageStyles.helperRow}>
                    <Button type="submit" variant="success">
                      Создать
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}

        {cards.length === 0 ? (
          <div style={pageStyles.emptyState}>Пока нет кандидатов</div>
        ) : (
          <Row>
            {cards.map((card) => (
              <Col sm={6} lg={4} key={card.id} className="mb-3">
                <Card style={pageStyles.card}>
                  <div style={pageStyles.cardHeader}>
                    <p style={pageStyles.candidateName}>{card.fullName}</p>
                    <p style={pageStyles.position}>{card.position}</p>
                    <Badge bg={stageBadgeVariant(card.stage)}>{card.stage}</Badge>
                  </div>

                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      <span style={pageStyles.listItemValue}>{card.contact}</span>
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Body>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => deleteHandler(card.id)}
                    >
                      Удалить
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default CardPage;
