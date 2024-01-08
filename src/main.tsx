import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/Poppins/Poppins-Regular.ttf";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeModel from "./lib/pages/home/home.model";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeModel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
