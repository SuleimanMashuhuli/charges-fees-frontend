import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import KeycloakServices from './services/Keycloak';
import KeycloakUserProvider from './context/KeycloakUserContext';

KeycloakServices.initKeycloak(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <KeycloakUserProvider>
        <App />
      </KeycloakUserProvider>
    </React.StrictMode>
  );
})

reportWebVitals();
