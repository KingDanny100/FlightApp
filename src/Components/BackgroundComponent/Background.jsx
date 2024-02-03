import React from "react";
import "./Background.css";
import backimage from "../../../FlightImages/terminals/personterminal2.jpg";

const Background = () => {
  //   const backgroundImg = `url(${backimage})`
  return (
    <div className="background_container">
      <img src={backimage} alt="terminal" />
      <div className="overlay"></div>

      <h3 className="back_head">Travel Made Easy</h3>
    </div>
  );
};

export default Background;
