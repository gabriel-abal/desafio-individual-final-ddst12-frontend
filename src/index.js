import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import App from './App';
import ErrorPage from './pages/routes/ErrorPage';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "cadastro",
        element: <Cadastro />
      },
    ]
  },


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

