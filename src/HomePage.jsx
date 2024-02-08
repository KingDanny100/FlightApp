import React from "react";
import Header from "./Components/HomeComponent/Header/Header";
import BookForm from "./Components/BookingComponent/BookForm";
import About from "./Components/AboutComponent/About";
import Places from "./Components/DestinationComponent/Places";
import Services from "./Components/ServicesComponent/Services";
import Background from "./Components/BackgroundComponent/Background";

const HomePage = ({handleShowReciept}) => {
  return (
    <>
      <Header />
      <BookForm handleShowReciept={handleShowReciept}/>
      <About />
      <Places />
      <Services />
      <Background />
    </>
  );
};

export default HomePage;
