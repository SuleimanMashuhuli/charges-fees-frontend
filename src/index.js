import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HttpServices from './services/HttpService';
// import UserServices from './services/UserService';
// import KeycloakUserProvider from './context/KeycloakUserContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <KeycloakUserProvider> */}
        <App />
      {/* </KeycloakUserProvider> */}
    </React.StrictMode>
  );
// UserServices.initKeycloak(() => {
  
// })

HttpServices.configure(); 
reportWebVitals();
