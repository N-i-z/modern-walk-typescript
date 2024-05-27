import React from "react";
import Products from "./product";
import "../../components/clothing.css";

export function MensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <h1>Men's Clothing</h1>
      </div>
      <Products />
    </div>
  );
}
