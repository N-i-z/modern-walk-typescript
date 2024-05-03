import React from "react";
import Product from "./product";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <hr></hr>
      <div className="flash-sale">
        <h2>Flash Sale</h2>
        <div className="products">
          <Product />
        </div>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <div className="cat">
          <div className="cat1">
            <Link to="/mens-clothing" className="catLink">
              <b>Men's clothing</b>
            </Link>
          </div>
          <div className="cat2">
            <Link to="/womens-clothing" className="catLink">
              <b>Women's clothing</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
