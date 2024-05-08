import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/Contact" style={linkStyle}>Contact</NavLink>
      <NavLink to="/Service" style={linkStyle}>Service</NavLink>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#333",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "5px 10px",
  border: "1px solid #fff",
  borderRadius: "5px",
};

export default NavigationBar;