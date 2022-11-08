import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles/style.css'
import UserContext from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserContext>
      <App />
      </UserContext>
  </React.StrictMode>
);