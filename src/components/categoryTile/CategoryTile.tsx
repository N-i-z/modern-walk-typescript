import React from "react";
import { Link } from "react-router-dom";
import "./CategoryTile.css";

interface CategoryTileProps {
  category: string;
  url: string;
  className: string;
}

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
