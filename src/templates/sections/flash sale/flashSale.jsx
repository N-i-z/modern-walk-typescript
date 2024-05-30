import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../components/flash sale/FlashSale.css";
import ProductCard from "../../../components/productCard/ProductCard";
import Loading from "../../../components/loading/Loading";

const FlashSaleProductRendering = () => {
  const [loading, setLoading] = useState(false);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);

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
          setMenProducts(menProducts);
          setWomenProducts(womenProducts);
        })
      )
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderAlternateProducts = () => {
    const alternateProducts = [];
    const maxLength = Math.max(menProducts.length, womenProducts.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < menProducts.length) {
        alternateProducts.push(menProducts[i]);
      }
      if (i < womenProducts.length) {
        alternateProducts.push(womenProducts[i]);
      }
    }
    return alternateProducts;
  };

  return (
    <div className="flash-sale-products">
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        renderAlternateProducts().map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            descriptionBackgroundColor={
              product.category === "men" ? "#2BD9AF" : "#FF5E84"
            }
          />
        ))
      )}
    </div>
  );
};

export default FlashSaleProductRendering;
