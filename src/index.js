import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
/** Styles */
import "./index.css";
import Login from "./pages/login/login";


const Initial = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<App />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<Initial />);
