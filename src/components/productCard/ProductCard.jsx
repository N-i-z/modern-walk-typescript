import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({
  title,
  image,
  price,
  description,
  descriptionBackgroundColor,
}) => {
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
        className="card-description"
        style={{ backgroundColor: descriptionBackgroundColor }}
      >
        <h4>{`Rs ${price}`}</h4>
        <br />
        <p>{description}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  descriptionBackgroundColor: PropTypes.string,
};

ProductCard.defaultProps = {
  descriptionBackgroundColor: "#bff4e7",
};
export default ProductCard;
