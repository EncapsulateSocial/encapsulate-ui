import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import RegisterPage from './views/Register/RegisterPage/RegisterPage';
import LoginPage from './views/Login/LoginPage/LoginPage';
import BlogHomePage from './views/Blog/BlogHomePage/BlogHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/blog" element={<BlogHomePage />} />
    </Routes>
  </BrowserRouter>
);