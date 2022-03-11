import React, { useState } from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HeaderOption from "./HeaderOption";

function Header() {
  const [status, setStatus] = useState("false");
  const [navbar, setNavbar] = useState("false");
  const classToggle = () => {
    setStatus(!status);
  };
  const burgerToggle = () => {
    setStatus(!status);
  };
  const changeNavBar = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBar);
  return (
    <div className="header">
      <div
        className={`header__nav ${navbar ? "navbar" : ""} ${
          status ? "" : "active"
        }`}
      >
        <div className="header__div">
          <a href="#info">
            <HeaderOption Icon={HomeIcon} title="Home" selected={true} />
          </a>
        </div>
        <div className="header__div">
          <a href="#work">
            <HeaderOption Icon={WorkOutlineIcon} title="Projets" />
          </a>
        </div>
        <div className="header__div">
          <a href="#about">
            <HeaderOption Icon={PersonOutlineIcon} title="Parcours" />
          </a>
        </div>
        <div className="header__div">
          <a href="#contact">
            <HeaderOption Icon={MailOutlineIcon} title="Contact" />
          </a>
        </div>
      </div>
      <div
        className={`burger  ${navbar ? "nav" : ""} ${status ? "" : "change"}`}
        onClick={(classToggle, burgerToggle)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Header;
