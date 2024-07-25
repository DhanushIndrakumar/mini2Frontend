import React from "react";
import { Link } from "react-router-dom";
import "./UserOperations.css";

export default function UserOperations() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user.userId : '';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <>
      <div className="AddBorder p-3">
        <h1 className="text-center text-primary my-4">
          Patient Medicine and Appointment System
        </h1>
        <h2 className="text-center text-muted mb-4">User Operations</h2>

        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card mx-auto h-100" style={{ width: "18rem" }}>
                <img
                  src="https://img.freepik.com/free-vector/appointment-booking-smartphone_23-2148559902.jpg?t=st=1721325918~exp=1721329518~hmac=2c2cc569d42cc66a250ca9014df2670dc1dcc9e1403ee929766267948c336d2c&w=740"
                  className="card-img-top img-fluid"
                  alt="Book Appointment"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Book Appointment</h5>
                  <p className="card-text">
                    Here the user is allowed to book an appointment.
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/bookAppointment/${userId}`}
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card mx-auto h-100" style={{ width: "18rem" }}>
                <img
                  src="https://img.freepik.com/free-vector/banner-with-medical-kit-medicine-icons_603843-1519.jpg?ga=GA1.1.138035674.1721324813&semt=sph"
                  className="card-img-top img-fluid"
                  alt="View Medication"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">View Medication</h5>
                  <p className="card-text">
                    The patient is able to view the Medication.
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/getMedication/${userId}`}
                  >
                    View Medication
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card mx-auto h-100" style={{ width: "18rem" }}>
                <img
                  src="https://img.freepik.com/free-vector/cancelled-events-announcement_23-2148584717.jpg?t=st=1721326029~exp=1721329629~hmac=c5c6342894663620ebb42f14ca777b8f1c560878096a6a1d14915f89b1053775&w=740"
                  className="card-img-top img-fluid"
                  alt="Cancel Appointment"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Cancel Appointment</h5>
                  <p className="card-text">
                    The user can cancel the appointment.
                  </p>
                  <Link
                    className="btn btn-primary"
                    to={`/cancelAppointment/${userId}`}
                  >
                    Cancel Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center">
          <Link to="/" onClick={handleLogout} className="btn btn-danger">
            Click here to go back to Registration Form
          </Link>
        </div>
      </div>
    </>
  );
}
