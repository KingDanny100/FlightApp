import React, { useState } from "react";
import "./Navbar.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedIn from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="nav_container">
      <div className="info_nav">
        <aside className="right_aside">
          <span className="icon">
            <EmailRoundedIcon />
          </span>
          <span> flyeasyinfo@gmail.com | </span>
          <span className="icon">
            <LocalPhoneRoundedIcon />
          </span>
          <span> +234 806 377 5427</span>
        </aside>
        <aside className="left_aside">
          <FacebookRoundedIcon className="nav_icons"/>
          <TwitterIcon className="nav_icons"/>
          <InstagramIcon className="nav_icons"/>
          <LinkedIn className="nav_icons"/>
          <YouTubeIcon className="nav_icons"/>
        </aside>
      </div>
      <div className="main_nav">
        <h1 className="logo">
          FLY|EA<span>$</span>Y
        </h1>
        <div className="menu" onClick={handleMenu}>
          <MenuIcon sx={{ fontSize: 35 }} />
        </div>
        <aside className="links">
          <ul className="mainlinks">
            <Link to="/" >
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/explore">
              <li>Explore</li>
            </Link>
            <li>Contact</li>
          </ul>
        </aside>
      </div>

      {showMenu && (
        <div className="menudiv">
          <ul className="menulinks">
            <Link to="/">
              <li onClick={handleMenu}>Home</li>
            </Link>
            <Link to="/about">
              <li onClick={handleMenu}>About</li>
            </Link>
            <Link to="/services">
              <li onClick={handleMenu}>Services</li>
            </Link>
            <Link to="/explore">
              <li onClick={handleMenu}>Explore</li>
            </Link>
            <li onClick={handleMenu}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
