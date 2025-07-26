import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HttpServices from './services/HttpService';
import UserServices from './services/UserService';
import KeycloakUserProvider from './context/KeycloakUserContext';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const renderApp = () => {
  root.render( 
    <KeycloakUserProvider>
      <App />
    </KeycloakUserProvider>
  );
};

UserServices.initKeycloak(renderApp);

HttpServices.configure();
