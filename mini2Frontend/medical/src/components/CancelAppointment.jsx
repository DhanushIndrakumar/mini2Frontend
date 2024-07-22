import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CancelAppointment.css';

export default function CancelAppointment() {
  const [responseMessage, setResponseMessage] = useState(null); // State to store the response message
  const [error, setError] = useState(null); // State to store errors

  const userId = JSON.parse(localStorage.getItem('user')).userId; // Extract userId from localStorage

  const handleCancel = async () => {
    try {
      const response = await axios.delete(`http://localhost:8082/api/user/cancelAppointment/${userId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
      });

      console.log("Appointment cancelled successfully:", response.data);
      const message = response.data;
      setResponseMessage(message); // Set the response message in state
      localStorage.setItem('cancelAppointmentResponse', message); // Store the response in local storage
      setError(null); // Reset any previous errors
    } catch (error) {
      console.error("Error cancelling appointment:", error.response ? error.response.data : error.message);
      const errorMessage = "Could not Cancel the Appointment";
      setError(errorMessage); // Set a default error message
      setResponseMessage(null); // Reset the response message in case of error
      localStorage.setItem('cancelAppointmentResponse', errorMessage); // Store the error message in local storage
    }
  };

  return (
    <div className="container mt-5">
      <div className="AddBorder p-3">
        <h2>Are you sure to cancel the appointment?</h2>
        <button className="btn btn-danger me-2" onClick={handleCancel}>Yes</button>
        <Link to="/useroperations" className="btn btn-secondary">No</Link>
      </div>

      {responseMessage && (
        <div className="AddBorder p-3 mt-4">
          <h2>{responseMessage}</h2>
        </div>
      )}

      {error && (
        <div className="AddBorder p-3 mt-4">
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
}
