import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyD9GlMqMh-jzloHJC0X3FWb2pe_JTJuQxk",
  authDomain: "e-commerce-verdelisto.firebaseapp.com",
  projectId: "e-commerce-verdelisto",
  storageBucket: "e-commerce-verdelisto.appspot.com",
  messagingSenderId: "529435935316",
  appId: "1:529435935316:web:ab6a3105969537ed4c23c1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


