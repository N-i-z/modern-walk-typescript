import React from "react";
import FlashSale from "../sections/FlashSale/FlashSale.section.tsx";
import Categories from "../sections/Categories/Categories.section.tsx";
import Heading from "../../components/atoms/Typography/Heading.component.tsx";
import "../../components/molecules/ProductCard/ProductCard.component.css";
import "../../components/atoms/Typography/Heading.component.css";

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
