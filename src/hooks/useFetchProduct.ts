import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  url: string;
  id: string;
};

// url: "https://asos2.p.rapidapi.com/products/v3/detail"
// id: "9851612"

const useFetch = (url, id): Props => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: url,
      params: {
        id: id,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        "X-RapidAPI-Key": "4012e9cea4msh6693aea91c40dbcp1b5578jsn57eb6cd8dab7",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, id]);

  return { data, loading, error };
};

export default useFetch;
