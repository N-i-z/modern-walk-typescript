import React from "react";
import Products from "./product";
import "./mens-clothing.css";

export function MensClothing() {
  return (
    <div className="content1">
      <div className="heading1">
        <h1>Men's Clothing</h1>
      </div>
      <Products />
    </div>
  );
}
