import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Fit Club Logo" />
    </div>
  );
};

export default Header;
