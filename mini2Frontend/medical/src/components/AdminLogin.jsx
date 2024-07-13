import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';


export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
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
        const response = await axios.post("http://localhost:8082/api/auth/login", loginData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const token = response.data.token;
        // Store the token in local storage
        localStorage.setItem('token', token);
  
        console.log("Login successful:", response.data);
        // Redirect or perform other actions after successful login
        navigate("/doctoroperations");
      } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        // Handle errors (e.g., show an error message)
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
          </div>
        </div>
      </>
    );
}
