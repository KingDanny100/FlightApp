import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Services from "./Components/ServicesComponent/Services";
import About from "./Components/AboutComponent/About";
import Places from "./Components/DestinationComponent/Places";
import Navbar from "./Components/HomeComponent/Navbar/Navbar";
import Footer from "./Components/FooterComponent/Footer";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Payment from "./Components/BookingComponent/Payment/Payment";
import Confirmation from "./Components/Confirmation/Confirmation";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  // const [showReceipt, setShowReciept] = useState(false)
  const [fullDetails, setFullDetails] = useState('')

  const handleShowReciept = (details) =>  {
    setFullDetails(details)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const navHeight = 60;

      setIsVisible(scrollTop > navHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
    setIsVisible(false);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage handleShowReciept={handleShowReciept} />} />
        <Route path="/services" Component={Services} />
        <Route path="/about" Component={About} />
        <Route path="/explore" Component={Places} />
        <Route path="/user" Component={Payment} />
        <Route path="/receipt" element={<Confirmation details={fullDetails} />} />
      </Routes>
      <div
        className={`scroll_arrow ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <KeyboardDoubleArrowUpIcon sx={{ fontSize: 50 }} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
