import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

function seatsAllocation (props){
  if (props.passengerClass === "Business") {
    let businessSeats = [];
    for (let i = 1; i <= 20; i++) {
      businessSeats.push(i);
    }
    const seatNumber =[]
    for (let i = 1; i <= parseInt(props.persons) ; i++) {
      const randNum = Math.ceil(Math.random() * businessSeats.length)
      const seatNum = businessSeats.splice(randNum,1)
      seatNumber.push(...seatNum)
    }
    return seatNumber
    // setSeats(seatNumber)
  }

  if (props.passengerClass === "Economy") {
    let economySeats = [];
    for (let i = 1; i <= 80; i++) {
      economySeats.push(i);
    }
    const seatNumber =[]
    for (let i = 1; i <= parseInt(props.persons) ; i++) {
      const randNum = Math.ceil(Math.random() * economySeats.length)
      const seatNum = economySeats.splice(randNum,1)
      seatNumber.push(...seatNum)
    }
    return seatNumber
    // setSeats(seatNumber)
  }
}

const Payment = (props) => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [price, setPrice] = useState((1900 * parseInt(props.persons))/parseInt(props.persons));
  const [showMessage, setShowMessage] = useState(false);
  const [seats, setSeats] = useState(seatsAllocation(props));
 
  
  useEffect(() => {
    if (props.passengerClass === "Business") {
      setPrice((prev) => prev + 100);
    }
  }, []);

  const initialState = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    source: props.source,
    destination: props.destination,
    selectedDate: props.selectedDate,
    passengerClass: props.passengerClass,
    persons: props.persons,
    flightPrice: price,
    seats: seats
  });

  const [personDetails, setPersonDetails] = useState(initialState);

  const handleDetailsChange = (e) => {
    setPersonDetails({ ...personDetails, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    props.handleShowReciept(personDetails);
    setShowMessage(true);
    
    try {
      axios.post("http://127.0.0.1:5000/user/", personDetails).then((res) => {
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      setShowMessage(false);
      props.setIsValid(false);
      navigate("/receipt");
    }, 6000);
  };

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")

  const closeModal = () => {
    props.setIsValid(false);
  };

  // const handleDetailsChange = (e) => {
  //   console.log(personDetails);
  //   setPersonDetails((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  return (
    <div className="payment_container">
      <div className="payment_form">
        <div className="details">
          <div className="travel_locations">
            <aside className="source">From : {props.source}</aside>
            <aside className="destination">To : {props.destination}</aside>
          </div>
          <div className="travel_details">
            <aside className="date">Date : {props.selectedDate}</aside>
            <aside className="passengers">
              Number of Passengers : {props.persons}
            </aside>
            <aside className="passenger_class">
              Flight Class : {props.passengerClass}
            </aside>
            <aside className="passenger_class">
              Price : {`$${props.persons * price}`}
            </aside>
          </div>
        </div>
        <form onSubmit={HandleSubmit} className="input_div">
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={personDetails.firstName}
            onChange={handleDetailsChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={personDetails.lastName}
            onChange={handleDetailsChange}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={personDetails.email}
            onChange={handleDetailsChange}
            required
          />
          <div className="payment_buttons">
            <button type="button" className="button" onClick={closeModal}>
              Cancel
            </button>
            {/* <input type="button" className="button" onClick={closeModal} value="Cancel" /> */}
            <button type="submit" className="button">
              Continue
            </button>
          </div>
          {showMessage && (
            <p className="confirmation">
              Confirming Payment... Do not refresh the page
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Payment;
