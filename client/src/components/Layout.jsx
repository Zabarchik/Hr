import React from 'react';
import { Outlet } from 'react-router';
import Header from './ui/Header';
import MyFooter from './ui/MyFooter';
import { Container } from 'react-bootstrap';

function Layout({user, logoutHandler}) {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      <Header user={user} logoutHandler={logoutHandler}/>
      <div >
        <main className="flex-grow-1">
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
