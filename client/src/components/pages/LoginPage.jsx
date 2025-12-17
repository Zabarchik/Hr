import React from 'react';

export default function LoginPage({ loginHandler }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          {/* Обертка-карточка в стиле твоего приложения */}
          <div className="card bg-dark text-light shadow-lg border-0 p-4">
            <div className="text-center mb-4">
              <h2 className="text-info">Вход</h2>
              <p className="text-white-50 small">Рады видеть тебя снова! 👋</p>
            </div>

            <form onSubmit={loginHandler} className="d-flex flex-column gap-3">
              <input 
                name="email" 
                type="email" 
                placeholder="Введи email" 
                className="form-control bg-secondary text-white border-0 py-2"
                required
              />

              <input 
                name="password" 
                type="password" 
                placeholder="Введи пароль" 
                className="form-control bg-secondary text-white border-0 py-2"
                required
              />

              <button type="submit" className="btn btn-info fw-bold mt-2 py-2">
                Войти
              </button>
            </form>

            <div className="mt-4 text-center">
              <small className="text-white-50">
                Нет аккаунта? <a href="/registr" className="text-info text-decoration-none">Создать</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}