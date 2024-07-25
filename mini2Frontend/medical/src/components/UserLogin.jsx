import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
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

      // Store the token in local storage
      localStorage.setItem('token', token);

      console.log("Login successful:", loginResponse.data);

      // Now use the token to get user details
      const userDetailsResponse = await axios.post("http://localhost:8082/api/auth/getDetailsByToken", { token }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Store the user details in local storage
      localStorage.setItem('user', JSON.stringify(userDetailsResponse.data));

      console.log("User details retrieved successfully:", userDetailsResponse.data);

      // Redirect or perform other actions after successful login
      navigate("/useroperations");
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      setErrorMessage("Sorry, Not able to login");
    }
  };

  return (
    <>
      <div className='container mt-5'>
        <div className="AddBorder p-3">
          <h2 className="mt-3 text-left text-muted">User Login form</h2>
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
          {errorMessage && (
            <div className="mt-3 text-danger">
              <p>{errorMessage}</p>
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
