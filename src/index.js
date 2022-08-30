import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Routes, Route , BrowserRouter} from 'react-router-dom'
import AddBook from './Pages/AddBook';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import UpdateBook from './Pages/UpdateBook';
import Product from './Pages/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/addBook" element = {<AddBook />} />
        <Route path='/updateBook/:id' element = {<UpdateBook />} />
        <Route path='/product:id' element= {<Product />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
