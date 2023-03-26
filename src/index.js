import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from './App';
import UserContext from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserContext>
      <Helmet>
            <meta charSet="utf-8" />
            <title>EMart - Smart Shopping</title>
            <meta name="description" content="ecommerce website" />
        </Helmet>
        <App />
      </UserContext>
  </React.StrictMode>
);

