import React, { useEffect, useState } from "react";
import "./Header.css";
import image1 from "../../../../FlightImages/explore/map.jpg";
import image2 from "../../../../FlightImages/explore/passport.jpg";
import image3 from "../../../../FlightImages/Cities/beutCity.jpg";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
const headContent = [
  {
    info: `Let's Discover The World Together`,
    image: image1,
    backgroundImage: `url(${image1})`,
  },
  {
    info: `Discover Amazing Places With Us`,
    image: image2,
    backgroundImage: `url(${image2})`,
  },
  {
    info: `Fly To The Biggest Cities Around The World`,
    image: image3,
    backgroundImage: `url(${image3})`,
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideLength = headContent.length;
  const autoscroll = true;
  let slideInterval;
  let intervalTime = 7000;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % headContent.length);
  };

  function auto() {
    slideInterval = setInterval(goNext, intervalTime);
  }
  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (autoscroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % headContent.length);

  //   }, 7000);

  //   return () => clearInterval(intervalId);
  // }, [currentIndex, headContent.length]);

  return (
    <div className="slider">
      <div className="arrow prev" onClick={goPrev}>
        <ArrowBackIosNewRoundedIcon />
      </div>
      <div className="arrow next" onClick={goNext}>
        <ArrowForwardIosRoundedIcon />
      </div>

      {headContent.map((slide, index) => {
        return (
          <div
            className={index === currentIndex ? `slide current` : "slide"}
            key={index}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            {index === currentIndex && (
              <div className="content">
                <h1>TOURS AND TRAVEL</h1>
                <h2>{slide.info}</h2>
                {/* <button className="home_button">Book Now</button> */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Header;
