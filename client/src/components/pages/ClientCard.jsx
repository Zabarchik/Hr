import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router';
import '../pages/ClientCard.css';


function ClientCard() {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    fetchCards();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    await axiosInstance.post('/clientscard', data);
    navigate('/');
  };

  const deleteHandler = async (id) => {
    await axiosInstance.delete(`/clientscard/${id}`);
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const submitChatHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    e.target.reset();

    setMessages((prev) => [...prev, { role: 'user', text: data.question }]);

    const response = await axiosInstance.post('/ai/completions', {
      question: data.question,
      context: {
        candidates: cards,
      },
    });

    setMessages((prev) => [...prev, { role: 'assistant', text: response.data.answer }]);
  };

  return (
    <Container>
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
                <Form.Control type="text" name="surname" placeholder="Фуллстаков" required />
              </div>

              <div className="col-8">
                <Form.Label>Позиция</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  placeholder="Fullstack developer"
                  required
                />
              </div>

              <div className="col-8">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="text" name="phone" placeholder="+7 900 000-00-00" required />
              </div>

              <div className="col-12">
                <div className="client-helper-row">
                  <div className="text-muted" style={{ fontSize: '13px' }}>
                    После создания вы будете перенаправлены на страницу этапов.
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
                      <Badge bg="info">{card.stage}</Badge>
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

      <div className="ai-assistant-wrapper">
        <Button className="ai-assistant-button" onClick={() => setIsChatOpen((v) => !v)}>
          🤖
        </Button>

        {isChatOpen && (
          <div className="ai-assistant-modal">
            <div className="ai-header">
              <strong>HR-ассистент</strong>
              <Button size="sm" variant="outline-secondary" onClick={() => setIsChatOpen(false)}>
                ✕
              </Button>
            </div>

            <div className="ai-body">
              {messages.length === 0 && (
                <div className="text-muted">
                  Спроси, например:
                  <br />
                  «Кто из кандидатов застрял на интервью?»
                </div>
              )}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`ai-message ${msg.role === 'user' ? 'user' : 'assistant'}`}
                >
                  <strong>{msg.role === 'user' ? 'Ты:' : 'Бот:'}</strong>
                  <div>{msg.text}</div>
                </div>
              ))}
            </div>

            <Form onSubmit={submitChatHandler} className="ai-footer">
              <Form.Control type="text" name="question" placeholder="Задай вопрос…" required />
              <Button type="submit">➤</Button>
            </Form>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ClientCard;
