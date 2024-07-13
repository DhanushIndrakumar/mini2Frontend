import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import UserOperations from "./components/UserOperations";
import DoctorOperations from "./components/DoctorOperations";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/useroperations" element={<UserOperations />} />
        <Route path="/doctoroperations" element={<DoctorOperations />} />
      </Routes>
    </div>
  );
}

export default App;
