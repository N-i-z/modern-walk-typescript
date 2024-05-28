import React from "react";
import Text from "../../components/typography";
import Products from "../../components/products/product";
import "../../components/products/clothing.css";

export function MensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <Text variant="h2">Men's Clothing</Text>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/men's clothing"
        descriptionBackgroundColor={"#bff4e7"}
      />
    </div>
  );
}
