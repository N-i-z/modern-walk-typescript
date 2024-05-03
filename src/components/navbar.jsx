import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="homelink">
        <Link to={"/"} className="logo-container">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
      </div>
      <div className="pagelink">
        <b>
          <Link to={"/mens-clothing"}>Men</Link>
          <Link to={"/womens-clothing"}>Women</Link>
        </b>
      </div>
    </div>
  );
};
