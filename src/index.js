import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ContactUs from './ContactUs.jsx';


const rootElement = document.getElementById("root");
render(
 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/response" element={<ContactUs />} />
    
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
