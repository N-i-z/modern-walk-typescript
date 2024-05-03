import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const productsToShow = PRODUCTS; /*.slice(0, 4);*/

  return (
    <div className="home">
      <div className="homeTitle">
        <h1>
          <Link to="./" className="titleLink">
            Modern Walk
          </Link>
        </h1>
      </div>
      <hr></hr>
      <div className="flash-sale">
        <h2>Flash Sale</h2>
        <div className="products">
          {productsToShow.map((product) => (
            <Product data={product} />
          ))}
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
