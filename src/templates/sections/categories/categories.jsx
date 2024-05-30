import React from "react";
import "../../../components/categoryTile/CategoryTile.css";

import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="catLink">
        <div className="men">
          <Link to="/mens-clothing" className="link">
            <b>Men's clothing</b>
          </Link>
        </div>
        <div className="women">
          <Link to="/womens-clothing" className="link">
            <b>Women's clothing</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
