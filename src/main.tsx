import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeModel from "./lib/pages/home/home.model";
import ChatModel from "./lib/pages/chat/chat.model";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeModel />} />
        <Route path="/chat" element={<ChatModel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
