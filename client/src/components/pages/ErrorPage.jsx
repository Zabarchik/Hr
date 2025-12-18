
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center bg-white text-dark flex-grow-1"
      style={{ minHeight: 'calc(100vh - 120px)', width: '100%' }}
    >
      <Container className="text-center">
        <div className="mb-4">
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: '4rem',
              letterSpacing: '-2px',
              color: '#ff4d4d',
            }}
          >
            404 ✨ Упс!
          </h1>
          <p
            className="text-secondary mb-4 mx-auto"
            style={{
              maxWidth: '800px',
              fontSize: '1.3rem',
            }}
          >
            Кажется, магия завела нас не туда.
            <br />
            Страница, которую ты ищешь, растворилась в цифровом эфире.
          </p>
        </div>

        <div className="d-flex flex-column align-items-center gap-3">
          <Button
            variant="dark"
            className="px-5 py-2 rounded-pill shadow border-0"
            onClick={() => navigate('/')} // Возвращаемся на главную
            style={{ fontSize: '1.1rem' }}
          >
            Вернуться в реальность
          </Button>

          <p className="text-muted mt-3" style={{ fontSize: '0.8rem' }}>
            Код ошибки: <span className="text-danger">PAGE_NOT_FOUND</span>
          </p>
        </div>
      </Container>
    </div>
  );
}
