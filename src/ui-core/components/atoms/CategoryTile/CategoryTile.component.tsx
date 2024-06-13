import React from "react";
import { Link } from "react-router-dom";
import "./CategoryTile.component.css";
import type { CategoryTileProps } from "./CategoryTile.types";

const CategoryTile = ({ category, url, className }: CategoryTileProps) => {
  return (
    <div className={`category-tile ${className}`}>
      <Link to={url} className="link">
        <b>{category}</b>
      </Link>
    </div>
  );
};

export default CategoryTile;
