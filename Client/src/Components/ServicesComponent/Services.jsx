import React from "react";
import { serviceData } from "./ServicesData";
import "./Services.css";
import AirlinesIcon from "@mui/icons-material/Airlines";
import Ratings from "./Ratings";

const Services = () => {
  return (
    <>
      <div className="service_container">
        <h3>Services</h3>
        <h2>What We Offer</h2>
        <div className="service_div">
          {serviceData.map((data, index) => {
            return (
              <div key={index} className="service_box">
                <div className="airline_icon">
                  <AirlinesIcon sx={{ fontSize: 50 }} />
                </div>
                <div className="service_data">
                  <h4>{data.head}</h4>
                  <p>{data.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Ratings />
    </>
  );
};

export default Services;
