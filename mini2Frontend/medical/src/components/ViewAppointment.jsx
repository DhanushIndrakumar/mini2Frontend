import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ViewAppointment.css'; // Import custom CSS if needed

export default function ViewAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [showAppointments, setShowAppointments] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewAppointments = async () => {
    if (!showAppointments) {
      try {
        const response = await axios.get('http://localhost:8082/api/doctor/getAppointments', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`, // Include token for authentication if needed
          },
        });
        localStorage.setItem('appointments', JSON.stringify(response.data)); // Store response in local storage
        setAppointments(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching appointments:", error.response ? error.response.data : error.message);
        setError("Sorry, couldn't fetch appointment details.");
        setAppointments([]);
      }
    }
    setShowAppointments(!showAppointments);
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:8082/api/doctor/deleteAppointment/${appointmentId}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`, // Include token for authentication if needed
        },
      });
      setAppointments(appointments.filter(appointment => appointment.aid !== appointmentId));
    } catch (error) {
      console.error("Error deleting appointment:", error.response ? error.response.data : error.message);
      setError("Sorry, couldn't delete appointment.");
    }
  };

  const handlePrescribeMedicine = (userId) => {
    // Navigate to prescribe medicine page with user ID
    navigate(`/prescribeMedicine/${userId}`);
  };

  const handleEditMedicine = (userId) => {
    // Navigate to edit medicine page with user ID
    navigate(`/editMedicine/${userId}`);
  };

  useEffect(() => {
    // Load appointments from local storage if available
    const storedAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (storedAppointments) {
      setAppointments(storedAppointments);
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="AddBorder p-3">
        <h2 className="mb-4">Please click on the below button to view all the appointments</h2>
        <div className="button-group mb-4">
          <button className="btn btn-primary" onClick={handleViewAppointments}>
            {showAppointments ? "Hide Appointments" : "View Appointments"}
          </button>
        </div>

        {error && (
          <div className="mt-4">
            <h3>{error}</h3>
          </div>
        )}

        {showAppointments && (
          <div className="mt-4">
            {appointments.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Appointment ID</th>
                      <th>Date</th>
                      <th>Patient ID</th>
                      <th>Patient Name</th>
                      <th>Actions</th>
                      {/* Add more columns as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr key={appointment.aid}>
                        <td>{appointment.aid}</td>
                        <td>{appointment.adate}</td>
                        <td>{appointment.userId}</td>
                        <td>{appointment.userName}</td>
                        <td>
                          <button className="btn btn-danger me-2" onClick={() => handleDeleteAppointment(appointment.aid)}>Delete</button>
                          <button className="btn btn-success me-2" onClick={() => handlePrescribeMedicine(appointment.userId)}>Prescribe</button>
                          <button className="btn btn-warning" onClick={() => handleEditMedicine(appointment.userId)}>Edit</button>
                        </td>
                        {/* Add more columns as needed */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-4">
                <h3>Sorry, no appointments booked.</h3>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
