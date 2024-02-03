import React from "react";
import "./About.css";
import photo from "../../../FlightImages/terminals/peopleterminal.jpg";
import flight1 from "../../../FlightImages/plane/flight.jpg";
import flight2 from "../../../FlightImages/plane/insideplane.jpg";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AirlinesIcon from "@mui/icons-material/Airlines";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import { aboutData } from "./AboutData";
import { fontGrid } from "@mui/material/styles/cssUtils";

const About = () => {
  return (
    <div className="about_container">
      <section className="about_main">
        <img src={photo} alt="girl taking a photo" />
        <div className="about_div">
          <h3>ABOUT US</h3>
          <h2>We Provide Best Flight Experience In Your Budget</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            inventore iusto ipsam vero ut molestiae. Soluta veniam ducimus ipsam
            repellendus magnam quia. Possimus voluptates fugit repudiandae ullam
            adipisci sit quidem.
          </p>
          <div className="image_divs">
            <img src={flight1} alt="takeoff plane" />
            <img src={flight2} alt="inside of a plane" />
          </div>
        </div>
      </section>
      <section className="list_section">
        {aboutData.map((data, index) => {
          return (
            <div key={index} className="list_div">
              <div className="icon_div">
                {index === 0 ? (
                  <AccountBalanceWalletIcon sx={{ fontSize: 50 }} />
                ) : index === 1 ? (
                  <AirplaneTicketIcon sx={{ fontSize: 50 }} />
                ) : index === 2 ? (
                  <AirlinesIcon sx={{ fontSize: 50 }} />
                ) : (
                  <ConnectingAirportsIcon sx={{ fontSize: 50 }} />
                )}
              </div>
              <div className="body_div">
                <h3>{data.head}</h3>
                <p>{data.para}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default About;
