import { useEffect, useState } from "react";
import axios from "axios";
import { Links as typeLinks } from "../../types/url";
import { useAuth0 } from "@auth0/auth0-react";

export const useDataFetching = (url: string) => {
  const [data, setData] = useState<Array<typeLinks>>([]);
  const { user, isLoading } = useAuth0();
  const [userInfoReady, setUserInfoReady] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && user) {
      setUserInfoReady(true);
    } else if (!isLoading && !user) {
      setLoading(false);
    }
  }, [isLoading, user]);

  const fetchData = async () => {
    try {
      if (userInfoReady) {
        const response = await axios.get(`${url}?userID=${user?.email}`);
        setData(response.data);
        setLoading(false);
      } else return;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, user, userInfoReady]);

  // Retornamos también la función setData para que pueda ser utilizada desde fuera del hook
  return { data, setData, fetchData, loading };
};
