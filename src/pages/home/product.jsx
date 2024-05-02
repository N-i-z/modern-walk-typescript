import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImage, description, gender } =
    props.data;
  if (gender === 1) {
    return (
      <div className="product-card">
        <p>
          <b>{productName}</b>
        </p>
        <img src={productImage} alt="product" />
        <div className="details-male">
          <p>
            <b>Rs {price}</b>
          </p>
          <p>{description}</p>
        </div>
      </div>
    );
  } else if (gender === 2) {
    return (
      <div className="product-card">
        <p>
          <b>{productName}</b>
        </p>
        <img src={productImage} alt="product" />
        <div className="details-female">
          <p>
            <b>Rs {price}</b>
          </p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};
