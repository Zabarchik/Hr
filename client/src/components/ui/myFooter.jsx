import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router';

function MyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto shadow-lg">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <span className="text-secondary">© {currentYear} Huntflow</span>
            <br />
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Nav className="justify-content-center">
              <NavLink to="/" className="nav-link text-secondary px-2">
                Главная
              </NavLink>
              <NavLink to="/clientscard" className="nav-link text-secondary px-2">
                Добавить кандидата
              </NavLink>
             
            </Nav>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <div className="d-inline-flex align-items-center">
              <div
                className="bg-success rounded-circle me-2"
                style={{ width: '10px', height: '10px' }}
              ></div>
              <a href=" https://t.me/+x8dxgjQurvkyYjky" target="_blank">Написать в Telegram</a>
            </div>
          </Col>
        </Row>

        

     
      </Container>
    </footer>
  );
}

export default MyFooter;
