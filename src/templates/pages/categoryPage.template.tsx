import React from "react";
import ProductCard from "../../components/productCard/ProductCard.tsx";
import Heading from "../../components/typography/Heading.tsx";
import "../../components/productCard/ProductCard.css";
import "../../components/typography/Heading.css";
import useFetchProducts from "../../hooks/useFetchProducts";
import Loading from "../../components/loading/Loading.tsx";

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

interface ProductsProps {
  url: string;
  descriptionBackgroundColor: string;
}

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

const Products: React.FC<ProductsProps> = ({
  url,
  descriptionBackgroundColor,
}) => {
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

interface ProductListProps {
  products: Product[];
  descriptionBackgroundColor: string;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  descriptionBackgroundColor,
}) => {
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
