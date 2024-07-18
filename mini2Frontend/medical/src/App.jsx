import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import UserOperations from "./components/UserOperations";
import DoctorOperations from "./components/DoctorOperations";
import BookAppointment from "./components/BookAppointment";
import CancelAppointment from "./components/CancelAppointment";
import ViewMedication from "./components/ViewMedication";
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
        <Route path="/bookAppointment/:userId" element={<BookAppointment />} />
        <Route path="/cancelAppointment/:userId" element={<CancelAppointment />} />
        <Route path="/getMedication/:userId" element={<ViewMedication />} />
      </Routes>
    </div>
  );
}

export default App;
