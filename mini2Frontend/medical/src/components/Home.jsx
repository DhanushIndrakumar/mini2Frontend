import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsPlaceholderVisible(value === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      userName: name,
      email: email,
      password: password,
      phone: phone,
      medicalHistory: medicalHistory,
    };

    try {
      const response = await axios.post("http://localhost:8082/api/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Success:", response.data);
      navigate("/userlogin");
      // Handle successful registration (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-primary">Patient Medicine and Appointment System</h1>
        <div className="AddBorder p-3">
          <h2 className="mt-3 text-left text-muted">Registration form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name:"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email:"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type={isPlaceholderVisible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
                id="password"
                placeholder="Enter your password:"
                style={isPlaceholderVisible ? { color: "#6c757d" } : {}}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number: 1234567890"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                id="medicalHistory"
                rows="3"
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
                placeholder="Past Medical History: Please enter the description of previous visits else type NO"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div className="mt-3">
          <div>
            Already a registered patient?
            <Link className="nav-link" to="/userlogin">
              Click here to user login
            </Link>
            Are you an admin?
            <Link className="nav-link" to="/adminlogin">
              Click here to admin login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
