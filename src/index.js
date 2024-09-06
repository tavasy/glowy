import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/home.scss';
import './styles/marquee.scss';
import './styles/_media.scss';
import './styles/products.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
