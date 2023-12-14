import React from "react";
import "./Places.css";
import { destinationData } from "./DestinationData";

const Places = () => {
  return (
    <div className="places_container">
      <h3>Explore</h3>
      <h2>Top Cities In The World</h2>
      <div className="grid_div">
        {destinationData.map((data, index) => {
          return <div key={index} className="grid_box">
            <img src={data.image} alt={data.country} />
            <h4>{data.country}</h4>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Places;
