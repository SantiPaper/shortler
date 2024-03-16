import { useEffect, useState } from "react";
import axios from "axios";
import { Links as typeLinks } from "../types/url";

export const useDataFetching = (url: string) => {
  const [data, setData] = useState<Array<typeLinks>>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // Retornamos también la función setData para que pueda ser utilizada desde fuera del hook
  return { data, loading, setData, fetchData };
};
