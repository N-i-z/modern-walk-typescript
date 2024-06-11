import React from "react";
import "./ProductCard.css";
import "../../App.css";
import { Category } from "../../enums/category.ts";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category.MensClothing | Category.WomensClothing;
  descriptionBackgroundColor: string;
}

const ProductCard = ({
  title,
  image,
  price,
  description,
  category,
  descriptionBackgroundColor,
}: ProductCardProps) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3>
          <b>{title}</b>
        </h3>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div
        className={`card-description ${
          category === Category.MensClothing
            ? "men-background"
            : "women-background"
        }`}
        style={{ backgroundColor: descriptionBackgroundColor }}
      >
        <h4>{`Rs ${price}`}</h4>
        <br />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
