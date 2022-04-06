import React from 'react';
import ReactDOM from 'react-dom'; // Debemos instalar el paquee react-router y luego importar --> npm i -S react-router-dom
import './assets/main.css';
import App from './App';

//Envolvemos nuestro fichero App con el BrowserRouter
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

