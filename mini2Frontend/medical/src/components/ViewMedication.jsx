import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ViewMedication.css'; 
export default function ViewMedication() {
  const [medication, setMedication] = useState(null); // State to store medication details
  const [error, setError] = useState(null); // State to store any error

  const handleViewMedication = async () => {
    const userId = JSON.parse(localStorage.getItem('user')).userId; // Extract userId from localStorage

    try {
      const response = await axios.get(`http://localhost:8082/api/user/getMedication/${userId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
      });

      if (response.data === "Medication not yet prescribed") {
        // Handle case where medication is not yet prescribed
        setError("Medication not yet prescribed.");
        setMedication(null); // Reset medication details
      } else if (response.data === "User not found") {
        // Handle case where user is not found
        setError("User not found.");
        setMedication(null); // Reset medication details
      } else {
        // Handle successful case where medication is found
        setMedication(response.data);
        setError(null); // Reset any previous errors
      }
    } catch (error) {
      console.error("Error fetching medication:", error.response ? error.response.data : error.message);
      setError("Sorry, couldn't fetch medication details."); // Set an error message
      setMedication(null); // Reset medication details in case of error
    }
  };

  return (
    <div className="container mt-5">
      <div className="AddBorder p-3">
        <h2 className="mb-4">Please click on Yes to view the medication prescribed</h2>
        <div className="button-group mb-4">
          <button className="btn btn-primary me-3" onClick={handleViewMedication}>Yes</button>
          <Link to="/useroperations" className="btn btn-secondary">No</Link>
        </div>

        {medication && (
          <div className="mt-4">
            <h3 className="mb-3">Medication Details:</h3>
            <div className="medication-details">
              <p><strong>Medication ID:</strong> {medication.mid}</p>
              <p><strong>Prescription:</strong></p>
              <ul>
                {medication.mprescription.map((prescription, index) => (
                  <li key={index}>{prescription}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4">
            <h3>{error}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
