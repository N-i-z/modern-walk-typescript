import React, { useState, useEffect } from "react";
import axios from "axios";
import "./flashSale.css";
import ProductCard from "../../../components/productCard/ProductCard.tsx";
import Loading from "../../../components/loading/Loading.tsx";
interface FlashSaleProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

const FlashSale: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [MensCloting, setMensCloting] = useState<FlashSaleProduct[]>([]);
  const [WomensClothing, setWomensClothing] = useState<FlashSaleProduct[]>([]);

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
          const MensCloting: FlashSaleProduct[] = menRes.data
            .slice(0, 2)
            .map((product: any) => ({
              ...product,
              category: "men",
            }));
          const WomensClothing: FlashSaleProduct[] = womenRes.data
            .slice(0, 2)
            .map((product: any) => ({
              ...product,
              category: "women",
            }));
          setMensCloting(MensCloting);
          setWomensClothing(WomensClothing);
        })
      )
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const renderAlternateProducts = () => {
    const alternateProducts: FlashSaleProduct[] = [];
    const maxLength = Math.max(MensCloting.length, WomensClothing.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < MensCloting.length) {
        alternateProducts.push(MensCloting[i]);
      }
      if (i < WomensClothing.length) {
        alternateProducts.push(WomensClothing[i]);
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

export default FlashSale;
