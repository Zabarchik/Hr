import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Navbar, Container, Nav, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

function Header({ user, logoutHandler }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [share, setShare] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get('/api/clientscard/stage')
      .then((response) => setData(response.data));
  }, []);
  const findClickHandler = () => {
    const result = data.filter((el) => {
      return (
        el.name === share || el.surname === share || el.Stages[el.Stages.length - 1].title === share
      );
    });
    console.log(result);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${share}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email адрес</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={'/images/logo.svg'}
              alt="Логотип компании"
              className="bg-light rounded-pill px-3 py-1 shadow-sm"
              width="100"
              height="100"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Главная
              </Nav.Link>
              
              <Nav.Link as={NavLink} to="/clientscard">
                Добавить кандидата
              </Nav.Link>
              <Form.Control
                type="text"
                placeholder="Что вы хотите найти?"
                onChange={(e) => {
                  const a = e.target.value;
                  setShare(a);
                }}
              />
              <Button
                variant="primary"
                onClick={() => {
                  findClickHandler();
                  handleShow();
                }}
              >
                Найти
              </Button>
            </Nav>

            <Nav className="align-items-center">
              <span className="navbar-text me-3 text-light">
                {!user ? 'Гостевой аккаунт' : `Привет, ${user.name}`}
              </span>

              {!user ? (
                <>
                  <Nav.Link as={NavLink} to="/registr">
                    <Button variant="outline-info" size="sm">
                      Регистрация
                    </Button>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/login">
                    <Button variant="info" size="sm">
                      Вход
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <Button variant="outline-danger" size="sm" onClick={logoutHandler}>
                  Выход
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
