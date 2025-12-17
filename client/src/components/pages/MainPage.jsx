import React from 'react';
import { Button, Spinner, Container } from 'react-bootstrap';

export default function MainPage({ testClickHandler }) {
  return (
    <>
   
    <div 
      className="d-flex flex-column align-items-center justify-content-center bg-white text-dark flex-grow-1" 
      // Вычитаем примерную высоту хедера (например, 60px) и футера (например, 60px)
      style={{ minHeight: 'calc(100vh - 120px)', width: '100%' }}
    >
      <Container className="text-center">
        {/* Вдохновляющий блок */}
        <div className="mb-4">
          <h1 
            className="fw-bold mb-3" 
            style={{ 
              fontSize: '3.5rem', 
              letterSpacing: '-1px', 
              color: '#00d2ff'    
            }}
          >
            Здесь начинаются чудеса ✨
          </h1>
          <p 
            className="text-secondary mb-4 mx-auto" 
            style={{ 
              maxWidth: '800px', 
              fontSize: '1.2rem'
            }}
          >
            Прямо сейчас под капотом этого приложения оживают строки кода.<br />
            Мы строим будущее, клик за кликом. <br /> Приготовься увидеть магию данных.
          </p>
        </div>

    
        <div className="d-flex flex-column align-items-center gap-2">
          <Button 
            variant="dark" 
            className="px-4 py-2 rounded-pill shadow border-0"
            onClick={testClickHandler}
            style={{ fontSize: '1rem', transition: 'all 0.3s ease' }}
          >
            Всё ли работает?
          </Button>

          <div className="mt-3">
            <Button variant="outline-primary" disabled className="border-0 bg-transparent" style={{ color: '#00d2ff' }}>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              <span style={{ fontSize: '0.9rem' }}>Магия загружается...</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
     </>
  );
}