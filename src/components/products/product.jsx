import React, { useState, useEffect } from "react";
import axios from "axios";
import "./clothing.css";

const Products = ({ url, descriptionBackgroundColor }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container">
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {data.map((Product) => (
        <div key={Product.id} className="card">
          <div className="card-title">
            <h3>
              <b>{Product.title}</b>
            </h3>
          </div>
          <div>
            <img src={Product.image} alt="product" />
          </div>
          <div
            className="card-description"
            style={{ backgroundColor: descriptionBackgroundColor }}
          >
            <h4>{`Rs ${Product.price}`}</h4>
            <br></br>
            <p>{Product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
