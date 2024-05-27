import React from "react";
import Products from "../../components/products/product";
import "../../components/products/clothing.css";

export function MensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <h1>Men's Clothing</h1>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/men's clothing"
        descriptionBackgroundColor={"#bff4e7"}
      />
    </div>
  );
}
