import React from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function SignupPage({ signupHandler }) {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg border-0 bg-dark text-light">
            <Card.Body className="p-5">
              <h2 className="text-center mb-4 text-info">Регистрация</h2>
              <p className="text-center text-white-50 mb-4">
                Создайте аккаунт, чтобы начать работу 🚀
              </p>
              
              <Form onSubmit={signupHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email адрес</Form.Label>
                  <Form.Control 
                    name="email" 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="bg-secondary text-white border-0"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Имя пользователя</Form.Label>
                  <Form.Control 
                    name="name" 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="bg-secondary text-white border-0"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control 
                    name="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="bg-secondary text-white border-0"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="info" type="submit" size="lg" className="text-dark fw-bold">
                    Зарегистрироваться
                  </Button>
                </div>
              </Form>

              <div className="mt-4 text-center">
                <small className="text-white-50">
                  Уже есть аккаунт? <a href="/login" className="text-info text-decoration-none">Войти</a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}