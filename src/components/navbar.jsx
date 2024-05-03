import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"} className="logo-container">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <Link className="men" to={"mens-clothing"}>
          Men's Clothing
        </Link>
        <Link className="women" to={"womens-clothing"}>
          Women's Clothing
        </Link>
      </div>
    </div>
  );
};
