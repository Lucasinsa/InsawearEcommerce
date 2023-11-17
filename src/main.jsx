import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

//Configuracion Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWXw9JyO_85ZTsFj66bkUGiCDpiHYMFRE",
  authDomain: "insawearecommerce.firebaseapp.com",
  projectId: "insawearecommerce",
  storageBucket: "insawearecommerce.appspot.com",
  messagingSenderId: "415626110726",
  appId: "1:415626110726:web:56a19838a310add1e96087"
};

//Inicialización Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)