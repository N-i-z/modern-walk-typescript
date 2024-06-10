import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

export interface UseFetchProductsReturn {
  loading: boolean;
  data: Product[];
}

const useFetchProducts = (url: string): UseFetchProductsReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: url,
    })
      .then((res: AxiosResponse) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [url]);

  return { loading, data };
};

export default useFetchProducts;
