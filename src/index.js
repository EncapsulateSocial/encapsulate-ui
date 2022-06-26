import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './sass/main.scss';
import App from './App';

import Register from './views/Register/Register/Register';
import Login from './views/Login/Login/Login';
import BlogHome from './views/Blog/BlogHome/BlogHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blog" element={<BlogHome />} />
    </Routes>
  </BrowserRouter>
);