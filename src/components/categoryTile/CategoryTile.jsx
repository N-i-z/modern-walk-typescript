import React from "react";
import { Link } from "react-router-dom";
import "./CategoryTile.css";

const CategoryTile = ({
  category,
  url,
  backgroundColor,
  hoverBackgroundColor,
}) => {
  return (
    <div
      className="category-tile"
      style={{ backgroundColor }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = hoverBackgroundColor)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = backgroundColor)
      }
    >
      <Link to={url} className="link">
        <b>{category}</b>
      </Link>
    </div>
  );
};

export default CategoryTile;
