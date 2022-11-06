import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CreatePost from "./CreatePost";
import reportWebVitals from "./reportWebVitals";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// use react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/create" element={<CreatePost />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
