import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ViewAppointment.css'; // Reuse the same CSS

export default function EditMedicine() {
  const { userId } = useParams(); // Get the user ID from the URL
  const [mprescription, setMprescription] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mprescriptionList = mprescription.split(',').map(item => item.trim()); // Convert the string back to a list

    try {
      const response = await axios.post(`http://localhost:8082/api/doctor/editMedicineList/${userId}`,
        { mprescription: mprescriptionList }, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`, 
            "Content-Type": "application/json" 
          },
        });
      localStorage.setItem('currentPrescription', response.data.join(', ')); 
      setResponseMessage(response.data.join(', ')); 
    } catch (error) {
      console.error("Error updating medicine:", error.response ? error.response.data : error.message);
      setError("Sorry, couldn't update medicine.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="AddBorder p-3">
        <h2 className="mb-4">Please Update the Medicine List</h2>
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
              placeholder="Re-enter medicines seperated by commas"
              value={mprescription}
              onChange={(e) => setMprescription(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {responseMessage && (
          <div className="mt-4">
            <h4>Updated Prescription:</h4>
            <p>{responseMessage}</p>
          </div>
        )}
        <div className="mt-4 text-center">
          <Link to="/viewAppointments" className="btn btn-secondary">
            Click here to go back to View Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
