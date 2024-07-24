import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ViewAppointment.css'; // Reuse the same CSS

export default function PrescribeMedicine() {
  const { userId } = useParams(); // Get the user ID from the URL
  const [mprescription, setMprescription] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert comma-separated string to an array of strings
    const mprescriptionArray = mprescription.split(',').map(item => item.trim());

    try {
      await axios.post(`http://localhost:8082/api/doctor/prescribeMedicine/${userId}`, 
        { mprescription: mprescriptionArray }, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`, // Include token for authentication if needed
            "Content-Type": "application/json" // Ensure correct content type
          },
        });
      navigate('/viewAppointments'); // Navigate back to the appointments view after successful submission
    } catch (error) {
      console.error("Error prescribing medicine:", error.response ? error.response.data : error.message);
      setError("Sorry, couldn't prescribe medicine.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="AddBorder p-3">
        <h2 className="mb-4">Please prescribe medicine for the patient</h2>
        {error && (
          <div className="mt-4">
            <h3>{error}</h3>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="mprescription">Medicine Prescription</label>
            <input
              type="text"
              className="form-control"
              id="mprescription"
              placeholder="Enter the medicines separated by commas"
              value={mprescription}
              onChange={(e) => setMprescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
