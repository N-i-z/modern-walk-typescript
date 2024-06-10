import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  description: string;
  descriptionBackgroundColor: string;
}

const ProductCard = ({
  title,
  image,
  price,
  description,
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
          descriptionBackgroundColor === "#2BD9AF"
            ? "men-background"
            : "women-background"
        }`}
      >
        <h4>{`Rs ${price}`}</h4>
        <br />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
