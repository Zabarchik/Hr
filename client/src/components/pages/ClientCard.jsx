import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardPage() {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');

    if (!title) return;

    setCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
      },
    ]);

    e.target.reset();
    setShowForm(false);
  };

  const deleteHandler = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <Container>
      <h2
        style={{
          textAlign: 'center',
          fontSize: '28px',
          fontWeight: 600,
          marginBottom: '24px',
          letterSpacing: '0.3px',
          color: '#1f2937', 
        }}
      >
        Карточки кандидатов
      </h2>

      <Button onClick={() => setShowForm(!showForm)} className="mb-3">
        Добавить
      </Button>

      {showForm && (
        <Form onSubmit={submitHandler} className="mb-4">
          <Form.Control
            type="text"
            name="title"
            placeholder="Заголовок карточки"
            className="mb-2"
          />
          <Button type="submit">Создать</Button>
        </Form>
      )}

      <Row>
        {cards.map((card) => (
          <Col sm={4} key={card.id} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />

              <ListGroup className="list-group-flush">
                <ListGroup.Item>{card.title}</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>

              <Card.Body>
                <Button variant="danger" size="sm" onClick={() => deleteHandler(card.id)}>
                  Удалить
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div>Всего карточек: {cards.length}</div>
    </Container>
  );
}

export default CardPage;
