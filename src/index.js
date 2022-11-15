import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/main.scss";
// import App from './App';

import Register from "./views/Register/Register/Register";
import Login from "./views/Login/Login/Login";
import Home from "./views/Blog/Home/Home";
import Error from "./views/Error/Error";

// Testing
import PostListing from "./components/blog/postListing/PostListing";
import Header from "./components/headers/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* path="*" means that any route that doesn't include the premade routes will re-route you to this error page */}
      <Route path="*" element={<Error />} />

      {/* Testing */}
      <Route path="/postListing" element={<PostListing />} />
    </Routes>
  </BrowserRouter>
);
