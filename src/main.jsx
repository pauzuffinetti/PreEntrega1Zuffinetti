import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { useContext } from 'react';
import { ItemsContext } from './contexts/ItemsContext.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyA5LwP39kHnI4gXT2uxwQQLZNnxdMavJek",
  authDomain: "skinecommercepz.firebaseapp.com",
  projectId: "skinecommercepz",
  storageBucket: "skinecommercepz.appspot.com",
  messagingSenderId: "1072621645093",
  appId: "1:1072621645093:web:bb492d2f1df5272866fecc",
  measurementId: "G-CJBW815GQE"
};
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
