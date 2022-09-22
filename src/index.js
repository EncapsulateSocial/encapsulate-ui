import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/main.scss";
// import App from './App';

import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Home from "./views/Blog/Home";

// Testing
import PostListing from "./components/blog/PostListing";
import Error from "./views/Blog/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Testing */}
      <Route path="/error" element={<Error />} />
      <Route path="/postListing" element={<PostListing />} />
    </Routes>
  </BrowserRouter>
);
