import React from "react";
import CategoryTile from "../../../components/categoryTile/CategoryTile.tsx";
import "../../../App.css";
import "./categories.css";
import { Category } from "../../../enums/category.ts";

const Categories: React.FC = () => {
  return (
    <div className="categories">
      <div className="catLink">
        <CategoryTile
          className="men-background"
          category={Category.MensClothing}
          url="/mens-clothing"
        />
        <CategoryTile
          className="women-background"
          category={Category.WomensClothing}
          url="/womens-clothing"
        />
      </div>
    </div>
  );
};

export default Categories;
