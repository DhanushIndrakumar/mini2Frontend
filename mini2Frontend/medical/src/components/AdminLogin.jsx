import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const [error, setError] = useState(""); // State for handling error messages
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsPlaceholderVisible(value === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const loginResponse = await axios.post("http://localhost:8082/api/auth/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const token = loginResponse.data.token;
      if (!token) {
        throw new Error("No token received");
      }

      localStorage.setItem('token', token);

      console.log("Login successful:", loginResponse.data);

      const userDetailsResponse = await axios.post("http://localhost:8082/api/auth/getDetailsByToken", { token }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Store the user details in local storage
      localStorage.setItem('doctor', JSON.stringify(userDetailsResponse.data));

      console.log("User details retrieved successfully:", userDetailsResponse.data);

      navigate("/doctoroperations");
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      setError("Sorry, not able to login"); // Set the error message
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <div className="AddBorder p-3">
          <h2 className="mt-3 text-left text-muted">Doctor Login form</h2>
          <form onSubmit={handleSubmit}>
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
                required
                style={isPlaceholderVisible ? { color: "#6c757d" } : {}}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {error && (
            <div className="mt-3 text-danger">
              <strong>{error}</strong>
            </div>
          )}
          <div className="mt-3">
            <Link to="/">Click to go back to Registration Form</Link>
          </div>
        </div>
      </div>
    </>
  );
}
