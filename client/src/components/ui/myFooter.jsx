import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto shadow-lg">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <span className="text-secondary">© {currentYear} Zabarchik's App.</span>
            <br />
            <small className="text-white-50">Сделано с ❤️ в Elbrus Bootcamp</small>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Nav className="justify-content-center">
              <NavLink to="/" className="nav-link text-secondary px-2">
                Главная
              </NavLink>
              <NavLink to="/about" className="nav-link text-secondary px-2">
                О нас
              </NavLink>
              <a
                href="https://github.com/Zabarchik"
                className="nav-link text-secondary px-2"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Nav>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <div className="d-inline-flex align-items-center">
              <div
                className="bg-success rounded-circle me-2"
                style={{ width: '10px', height: '10px' }}
              ></div>
              <small className="text-secondary">LiveCodding --если со мной это интересно </small>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary mt-4 mb-2" />

        <Row>
          <Col className="text-center">
            <p className="text-white-50" style={{ fontSize: '0.7rem' }}>
              Никакие права не защищены, копируйте сколько влезет 😸
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
