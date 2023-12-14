import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import GradeIcon from "@mui/icons-material/Grade";
import PersonIcon from "@mui/icons-material/Person";
import { Rating } from "./ServicesData";
import "./Ratings.css";

const Ratings = () => {
  return (
    <div className="rating_container">
      <h3>What People Responded</h3>
      <div className="rating_grid">
        {Rating.map((data, index) => {
          return (
            <div className="rating_box" key={index}>
              <div className="rating_image">
                <img src={data.image} alt={data.location} />
              </div>
              <div className="rating_body">
                <aside className="left_side">
                  <span className="icon_Span">
                    <ExploreIcon />
                  </span>
                  <span>{data.location}</span>
                </aside>
                <aside className="right_side">
                  <span className="icon_Span">
                    <PersonIcon />
                  </span>
                  <span>{data.persons}</span>
                </aside>
              </div>
              <h4>{data.text}</h4>
              <div className="star_box">
                <aside className="left_side">
                  <span className="icon_Span">
                    <GradeIcon />
                  </span>
                  <span>{data.rating}</span>
                </aside>
                <aside className="right_side">
                    <p>{data.continent}</p>
                </aside>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ratings;
