import React from "react";
import CategoryTile from "../../../components/categoryTile/CategoryTile";
import "./categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="catLink">
        <CategoryTile
          category="Men's clothing"
          url="/mens-clothing"
          backgroundColor="#2bd9af"
          hoverBackgroundColor="#239b85" // Darker shade for hover effect
        />
        <CategoryTile
          category="Women's clothing"
          url="/womens-clothing"
          backgroundColor="#ff5e84"
          hoverBackgroundColor="#cc4b69" // Darker shade for hover effect
        />
      </div>
    </div>
  );
};

export default Categories;
