import React, { useState } from "react";
import "./BookForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import FlightIcon from "@mui/icons-material/Flight";
import { Locations } from "../../../Data/LocationData";
import Payment from "./Payment/Payment";
import { format } from "date-fns";
import Confirmation from "../Confirmation/Confirmation";
// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const BookForm = ({handleShowReciept}) => {
  const location = Locations;
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [passengerClass, setPassengerClass] = useState("");
  const [persons, setPersons] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [fullInfo, setFullInfo] = useState('')
  // const [showReceipt, setShowReciept] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // if (source && destination && passengerClass && selectedDate && persons < 6 && persons > 0) {
      
    // }
    const dateString = format(selectedDate, "MMMM dd, yyyy");
      setFormattedDate(dateString);
      setIsValid(true);
  };

  const handlePersonChange = (e) => {
    setPersons(e.target.value);
  };
  const handleSourceChange = (e) => {
    const selectedSource = e.target.value;
    setSource(selectedSource);

    setDestination((prev) => {
      if (prev === selectedSource) {
        return "";
      }
      return prev;
    });
  };

  const handlePassengerClass = (e) => {
    setPassengerClass(e.target.value);
  };

  const handleDestinationChange = (e) => {
    const selectedDestination = e.target.value;
    setDestination(selectedDestination);

    const filterSource = location.filter(
      (location) => location !== selectedDestination
    );
    setSource((prev) => {
      if (prev === selectedDestination) {
        return "";
      }
      return prev;
    });
  };

  return (
    <div className="form_container">
      <div className="title">
        <span>
          <FlightIcon sx={{ fontSize: "40px" }} />
        </span>
        <h4>Book a flight</h4>
      </div>
      <form onSubmit={handleFormSubmit} className="booking_form">
        <select value={source} onChange={handleSourceChange} required>
          <option value="" disabled>
            From
          </option>
          {location.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select value={destination} onChange={handleDestinationChange} required>
          <option value="" disabled>
            To
          </option>
          {location.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date(new Date().setDate(new Date().getDate() + 2))}
          maxDate={new Date(new Date().setDate(new Date().getDate() + 22))}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select Travel Date"
          required
          className="date_input"
        />
        <input
          type="number"
          min={1}
          max={5}
          placeholder="Number of Persons"
          required
          value={persons}
          onChange={handlePersonChange}
        />
        <select value={passengerClass} required onChange={handlePassengerClass}>
          <option value="" disabled>
            Select Class
          </option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
        </select>
        <button type="submit" className="button">Proceed</button>
      </form>
      {isValid && (
        <Payment
          source={source}
          destination={destination}
          selectedDate={formattedDate}
          passengerClass={passengerClass}
          persons={persons}
          setIsValid={setIsValid}
          setFullInfo={setFullInfo}
          handleShowReciept={handleShowReciept}
        />
      )}
      {/* {showReceipt && <Confirmation details={fullInfo}/>} */}
    </div>
  );
};

export default BookForm;
