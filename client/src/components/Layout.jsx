import React from 'react';
import { Outlet } from 'react-router';
import Header from './ui/Header';
import MyFooter from './ui/myFooter';
import { Container } from 'react-bootstrap';
import './NewYearLayout.css';

function Layout({ user, logoutHandler }) {
  return (
    <>
      <div className="ny-layout">
        <div className="snow-layer" aria-hidden="true" />
        <div className="d-flex flex-column min-vh-100 ny-content">
          <Header user={user} logoutHandler={logoutHandler} />
          <main className="flex-grow-1 ny-main">
            <Container className="py-4">
              <Outlet />
            </Container>
          </main>
          <MyFooter />
        </div>
      </div>
    </>
  );
}

export default Layout;
