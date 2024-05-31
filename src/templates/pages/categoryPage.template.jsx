import React from "react";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Heading from "../../components/typography/Heading.jsx";
import "../../components/productCard/ProductCard.css";
import "../../components/typography/Heading.css";
import useFetchProducts from "../../hooks/useFetchProducts";
import Loading from "../../components/loading/Loading.jsx";

export function WomensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Women's Clothing</Heading>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/women's clothing"
        descriptionBackgroundColor={"#FF5E84"}
      />
    </div>
  );
}

export function MensClothing() {
  return (
    <div className="content">
      <div className="heading">
        <Heading variant="h2">Men's Clothing</Heading>
      </div>
      <Products
        url="https://fakestoreapi.com/products/category/men's clothing"
        descriptionBackgroundColor={"#2BD9AF"}
      />
    </div>
  );
}

const Products = ({ url, descriptionBackgroundColor }) => {
  const { loading, data } = useFetchProducts(url);

  return (
    <div>
      {loading ? (
        <Loading message="Loading..." />
      ) : (
        <ProductList
          products={data}
          descriptionBackgroundColor={descriptionBackgroundColor}
        />
      )}
    </div>
  );
};

const ProductList = ({ products, descriptionBackgroundColor }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          descriptionBackgroundColor={descriptionBackgroundColor}
        />
      ))}
    </div>
  );
};

export default ProductList;
