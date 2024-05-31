import React from "react";
import "./FlashSale.css";
import FlashSaleProductRendering from "../../templates/sections/flash sale/flashSale.jsx";
const FlashSale = () => {
  return (
    <FlashSaleProductRendering
      categories={["men's clothing", "women's clothing"]}
    />
  );
};

export default FlashSale;
