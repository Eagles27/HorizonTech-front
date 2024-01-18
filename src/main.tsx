import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeModel from "./lib/pages/home/home.model";
import SignInModel from "./lib/pages/signin/signIn.model";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeModel />} />
        <Route path="/signup-signin" element={<SignInModel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
