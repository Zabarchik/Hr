import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import MainPage from './components/pages/MainPage';
import Layout from './components/Layout';
import SignupPage from './components/pages/SignupPage';
import LoginPage from './components/pages/LoginPage';
import ErrorPage from './components/pages/ErrorPage';
import { useEffect, useState } from 'react';
import axiosInstance from './api/axiosInstance';
import { setAccessToken } from './api/axiosInstance';

import { Spinner } from 'react-bootstrap';
import AboutPage from './components/pages/AboutUs';
import ProtectedRoute from './components/HOCs/ProtectedRoute';
import CardPage from './components/pages/ClientCard';


function App() {
  const [data, setData] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signupHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/registr', data);
    if (res.status !== 200) alert('Ошибка регистрации');
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/auth/login', data);
    setUser(res.data.user);
    setAccessToken(res.data.accessToken);
  };

  const logoutHandler = async () => {
    await axiosInstance.get('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const testClickHandler = async () => {
    try {
      const response = await axiosInstance.get(`/test`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  if (loading)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Spinner animation="border" variant="info" style={{ height: '300px', width: '300px' }} />
      </div>
    );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage testClickHandler={testClickHandler} />,
        },
        {
          path: '/registr',
          element: (
            <ProtectedRoute isAllowed={!user} redirectTo="/">
              <SignupPage signupHandler={signupHandler} />
            </ProtectedRoute>
          ),
        },
        {
          path: '/login',

          element: (
            <ProtectedRoute isAllowed={!user} redirectTo="/">
              <LoginPage loginHandler={loginHandler} />
            </ProtectedRoute>
          ),
        },
        {
          path: '/about',
          element: (
            <ProtectedRoute isAllowed={!!user} redirectTo="/registr">
              <AboutPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/clientscard',
          element: <CardPage />,
        },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
