import React from "react";
import FlashSale from "../../components/flash sale/FlashSale.js";
import CategoryTiles from "../../components/categoryTile/CategoryTile.js";
import Heading from "../../components/typography/Heading.js";
import "../../components/productCard/ProductCard.css";
import "../../components/typography/Heading.css";

const Home = () => {
  return (
    <div className="home-page">
      <Heading variant="h2">Flash Sale</Heading>
      <FlashSale />
      <Heading variant="h2">Categories</Heading>
      <CategoryTiles />
    </div>
  );
};

export default Home;
