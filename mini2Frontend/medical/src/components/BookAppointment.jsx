import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function BookAppointment() {
  const [adate, setAdate] = useState("");
  const [appointmentResponse, setAppointmentResponse] = useState(null); // State to store the response
  const [error, setError] = useState(null); // State to store the error

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = JSON.parse(localStorage.getItem('user')).userId; // Extract userId from localStorage
    const appointmentData = {
      adate: adate,
    };

    try {
      const response = await axios.post(`http://localhost:8082/api/user/bookAppointment/${userId}`, appointmentData, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
      });

      console.log("Appointment booked successfully:", response.data);
      setAppointmentResponse(response.data); // Set the response in the state
      localStorage.setItem('appointmentResponse', JSON.stringify(response.data)); // Store the response in local storage
      setError(null); // Reset any previous errors
      
    } catch (error) {
      console.error("Error booking appointment:", error.response ? error.response.data : error.message);
      setError("Sorry, Couldn't book Appointment"); // Set a default error message
      setAppointmentResponse(null); // Reset the response in case of error
      
    }
  };

  // Function to get the date for tomorrow in the format yyyy-mm-dd
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <>
      <div className='container mt-5'>
        <div className="AddBorder p-3">
          <h2 className="mt-3 text-left text-muted">Book Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                id="adate"
                value={adate}
                onChange={(e) => setAdate(e.target.value)}
                min={getTomorrowDate()}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {appointmentResponse && (
          <div className="AddBorder p-3 mt-4">
            <h2>Thank You, Appointment has been booked successfully</h2>
            <h3>Appointment Details:</h3>
            <p><strong>Appointment ID:</strong> {appointmentResponse.aid}</p>
            <p><strong>Appointment Date:</strong> {appointmentResponse.adate.substring(0, 10)}</p>
            <Link to="/useroperations" className="btn btn-link">Click here to go back to User Operations</Link>
          </div>
        )}

        {error && (
          <div className="AddBorder p-3 mt-4">
            <h2>{error}</h2>
            <Link to="/useroperations" className="btn btn-link">Click here to go back to User Operations</Link>
          </div>
        )}
      </div>
    </>
  );
}
