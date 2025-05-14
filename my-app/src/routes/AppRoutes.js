// routes/AppRoutes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
