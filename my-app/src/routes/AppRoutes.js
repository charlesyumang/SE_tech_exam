import { React, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";

const AppRoutes = ({ setPath }) => {
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

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
