import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Routes, Route , BrowserRouter} from 'react-router-dom'
import AddPet from './components/AddPet';
import Home from './components/Home';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/addPet" element = {<AddPet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
