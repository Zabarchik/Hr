import React from 'react';
import { NavLink } from 'react-router-dom'; // Используем -dom
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Header({ user, logoutHandler }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          💙 Shabloni
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Главная</Nav.Link>
            <Nav.Link as={NavLink} to="/about">О нас</Nav.Link>
          </Nav>

          <Nav className="align-items-center">
            <span className="navbar-text me-3 text-light">
              {!user ? 'Гостевой аккаунт' : `Привет, ${user.name}`}
            </span>

            {!user ? (
              <>
                <Nav.Link as={NavLink} to="/registr">
                  <Button variant="outline-info" size="sm">Регистрация</Button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                  <Button variant="info" size="sm">Вход</Button>
                </Nav.Link>
              </>
            ) : (
              <Button 
                variant="outline-danger" 
                size="sm" 
                onClick={logoutHandler}
              >
                Выход
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;