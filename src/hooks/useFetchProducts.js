import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [url]);

  return { loading, data };
};

export default useFetchProducts;
