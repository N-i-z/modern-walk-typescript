import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [menData, setMenData] = useState([]);
  const [womenData, setWomenData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get("https://fakestoreapi.com/products/category/men's clothing"),
        axios.get(
          "https://fakestoreapi.com/products/category/women's clothing"
        ),
      ])
      .then(
        axios.spread((menRes, womenRes) => {
          const menProducts = menRes.data.slice(0, 2).map((product) => ({
            ...product,
            category: "men",
          }));
          const womenProducts = womenRes.data.slice(0, 2).map((product) => ({
            ...product,
            category: "women",
          }));
          setMenData(menProducts);
          setWomenData(womenProducts);
        })
      )
      .catch((error) => {
        console.error("Error fetching products:", error);
        setMenData([]); // Set men's data to empty array in case of error
        setWomenData([]); // Set women's data to empty array in case of error
      })
      .finally(() => setLoading(false));
  }, []);

  const renderAlternateProducts = () => {
    const alternateProducts = [];
    let menIndex = 0;
    let womenIndex = 0;
    while (menIndex < menData.length || womenIndex < womenData.length) {
      if (menIndex < menData.length) {
        alternateProducts.push(menData[menIndex]);
        menIndex++;
      }
      if (womenIndex < womenData.length) {
        alternateProducts.push(womenData[womenIndex]);
        womenIndex++;
      }
    }
    return alternateProducts;
  };

  return (
    <div className="products-container">
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {renderAlternateProducts().map((Product) => (
        <div key={Product.id} className={`card ${Product.category}`}>
          <div className="card-title">
            <h3>
              <b>{Product.title}</b>
            </h3>
          </div>
          <div>
            <img src={Product.image} alt="product" />
          </div>
          <div className="description-container">
            <div
              className="card-description"
              style={{
                backgroundColor:
                  Product.category === "men" ? "#aaf0df" : "#ffbece",
              }}
            >
              <h4>{`Rs ${Product.price}`}</h4>
              <br></br>
              <p>{Product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
