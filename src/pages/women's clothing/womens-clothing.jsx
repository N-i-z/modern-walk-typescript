import React from "react";
import Products from "../../components/products/product";
import "../../components/products/clothing.css";

export function WomensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <h1>Women's Clothing</h1>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/women's clothing"
        descriptionBackgroundColor={"#ffbece"}
      />
    </div>
  );
}
