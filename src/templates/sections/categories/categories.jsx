import React from "react";
import CategoryTile from "../../../components/categoryTile/CategoryTile";
import "./categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="catLink">
        <CategoryTile
          className="men"
          category="Men's clothing"
          url="/mens-clothing"
        />
        <CategoryTile
          className="women"
          category="Women's clothing"
          url="/womens-clothing"
        />
      </div>
    </div>
  );
};

export default Categories;
