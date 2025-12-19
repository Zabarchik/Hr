import { useEffect, useState } from 'react';
import { NavLink, Route } from 'react-router';
import { Navbar, Container, Nav, Button, Form, Modal } from 'react-bootstrap';
import logo from '../../../public/images/logo.svg';
import axios from 'axios';
import ModalWindows from '../ui/ModalWindow';

function Header({ user, logoutHandler }) {
  const [condidate, setCondidate] = useState([]);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint = true) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const handleClose = () => setShow(false);
  const [share, setShare] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get('/api/clientscard/stage')
      // .then((response) => console.log(response.data))
      .then((response) => setData(response.data));
  }, []);

  const findClickHandler = () => {
    console.log(data, '<-----');
    // console.log(data[0].name, '<-----');
    const result = data.filter((el) => {
      return el.name === share || el.surname === share || el.Stages.at(-1).title === share;
    });

    if (result.length !== 0) {
      setShow(true);
      setCondidate(result[0]);
    }
  };
  return (
    <>
      <ModalWindows
        condidate={condidate}
        share={share}
        fullscreen={fullscreen}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        setShow={setShow}
      />
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={logo}
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
              <Nav.Link as={NavLink} to="/add">
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
