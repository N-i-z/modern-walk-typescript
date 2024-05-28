import React from "react";
import Text from "../../components/typography";
import Products from "../../components/products/product";
import "../../components/products/clothing.css";

export function WomensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <Text variant="h2">Women's Clothing</Text>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/women's clothing"
        descriptionBackgroundColor={"#ffbece"}
      />
    </div>
  );
}
