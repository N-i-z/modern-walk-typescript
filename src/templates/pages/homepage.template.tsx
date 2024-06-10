import React from "react";
import FlashSale from "../sections/flash sale/flashSale.jsx";
import Categories from "../sections/categories/categories.jsx";
import Heading from "../../components/typography/Heading.tsx";
import "../../components/productCard/ProductCard.css";
import "../../components/typography/Heading.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Heading variant="h2">Flash Sale</Heading>
      <FlashSale />
      <Heading variant="h2">Categories</Heading>
      <Categories />
    </div>
  );
};

export default Home;
