import React from 'react';
import { Link } from "react-router-dom";
import './DoctorOperations.css';

export default function DoctorOperations() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('doctor');
  };

  return (
    <>
      <div className="AddBorder p-3">
        <h1 className="text-center my-4">Welcome to Patient Appointment System</h1>
        <h2 className="text-center mb-4">Doctor Operations</h2>

        <div className="container just">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img
                  src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148564506.jpg?t=st=1721668014~exp=1721671614~hmac=db4fdba424d8944fabc0ef0bec99661017ab83982bb18724a52fd512c466f15c&w=740"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h5 className="card-title">View Appointments</h5>
                  <p className="card-text">
                    Contains list of appointments booked by patients
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/viewAppointments`}
                  >
                    View Appointments
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3  just1">
          <Link to="/" onClick={handleLogout} className="btn btn-danger">
            Click here to go back to Registration Form
          </Link>
        </div>
      </div>
    </>
  );
}
