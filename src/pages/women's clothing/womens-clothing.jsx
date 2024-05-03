import React from "react";
import Products from "./product";
import "./womens-clothing.css";

export function WomensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <h1>Women's Clothing</h1>
      </div>
      <Products />
    </div>
  );
}
