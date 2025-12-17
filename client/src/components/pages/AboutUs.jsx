import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center bg-white text-dark flex-grow-1" 
      style={{ minHeight: 'calc(100vh - 120px)', width: '100%' }}
    >
      <Container className="text-center">
        <div className="mb-5">
          <h1 
            className="fw-bold mb-3" 
            style={{ 
              fontSize: '3.5rem', 
              letterSpacing: '-1px', 
              color: '#00d2ff' 
            }}
          >
            Команда 🐬 Дельфины 🐬
          </h1>
          <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            Мы — студенты <b>Elbrus Bootcamp</b>. 
            <br />
            Ловим волны кода, погружаемся на глубину Fullstack-разработки 
            и всегда плывем вперед.
          </p>
        </div>

  
        <Row className="justify-content-center gap-4">
          <Col md={3}>
            <div className="p-4 border rounded-4 shadow-sm bg-light h-100">
              <div className="fs-1 mb-2">🌊</div>
              <h4 className="fw-bold">Скорость</h4>
              <p className="text-muted small">Осваиваем технологии быстрее, чем дельфин рассекает океан.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-4 border rounded-4 shadow-sm bg-light h-100">
              <div className="fs-1 mb-2">🧠</div>
              <h4 className="fw-bold">Интеллект</h4>
              <p className="text-muted small">Решаем сложные задачи с помощью коллективного разума Эльбруса.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-4 border rounded-4 shadow-sm bg-light h-100">
              <div className="fs-1 mb-2">🤝</div>
              <h4 className="fw-bold">Семья</h4>
              <p className="text-muted small">Помогаем друг другу не утонуть в море багов и дедлайнов.</p>
            </div>
          </Col>
        </Row>

        <div className="mt-5 pt-4">
          <p className="text-muted" style={{ fontStyle: 'italic' }}>
            "Плыви к своей цели, даже если вокруг шторм из консольных ошибок"
          </p>
        </div>
      </Container>
    </div>
  );
}