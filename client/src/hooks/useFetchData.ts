import { useEffect, useState } from "react";
import axios from "axios";
import { Links as typeLinks } from "../../types/url";
import { useAuth0 } from "@auth0/auth0-react";

export const useDataFetching = (url: string) => {
  const [data, setData] = useState<Array<typeLinks>>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth0();

  const fetchData = async () => {
    try {
      const response = await axios.post(url, {
        userID: user?.id, // Envías el ID de usuario en el cuerpo de la solicitud
      });
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

  return { data, loading, setData, fetchData };
};
