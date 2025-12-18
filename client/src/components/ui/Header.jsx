import React from 'react';
import { NavLink } from 'react-router-dom'; // Используем -dom
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../../../public/images/logo.svg'

function Header({ user, logoutHandler }) {
  return (
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
          <Nav className="me-auto d-flex gap-3">
            <Button variant="info" >
               <Nav.Link as={NavLink} to="/" className="text-dark">Главная</Nav.Link>
            </Button>
           
            <Button variant="info">
              <Nav.Link as={NavLink} to="/clientscard" className="text-dark">Добавить кандидата</Nav.Link>
            </Button>
            
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