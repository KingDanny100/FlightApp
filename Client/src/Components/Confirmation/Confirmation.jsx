import React, { useState } from "react";
import "./Confirmation.css";
import QR from "../QR/QR";
import paid from "../../../src/assets/paid.png";
import { Link, useNavigate } from "react-router-dom";

const Confirmation = ({ details }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="confirm_container">
      {!details.lastName ? (
        <div className="error_div">404: NOT FOUND</div>
      ) : (
        <>
          <div className="reciept_info">
            <div className="reciept_details">
              <p>
                <span>Booked By:</span>{" "}
                {`${details.lastName} ${details.firstName}`}
              </p>
              <p>
                <span>From:</span> {`${details.source}`}
              </p>
              <p>
                <span>To:</span> {`${details.destination}`}
              </p>
              <p>
                <span>Flight Date:</span> {`${details.selectedDate}`}
              </p>
              <p>
                <span>Number of Passengers:</span> {`${details.persons}`}
              </p>
              <p>
                <span>Flight Class:</span> {`${details.passengerClass}`}
              </p>

              {details.seats.map((seat, index) => {
                return (
                  <p key={index}>
                    <span>Seat Number:</span>
                    {details.passengerClass === "Business"
                      ? ` A${seat}`
                      : ` ${seat}`}
                  </p>
                );
              })}
              {/* <span>Seat Number:</span> {seatNumber} Window{" "} */}

              <p></p>
            </div>
            <QR details={details} />
          </div>

          <img src={paid} alt="Paid image" className="paid_image" />
          <p className="receipt_message">Thank You For Flying With Us</p>
          <div className="receipt_buttons">
            <button type="button" onClick={goHome}>
              Close
            </button>
            <button>Print Receipt</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Confirmation;
