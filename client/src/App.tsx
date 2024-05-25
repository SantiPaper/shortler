import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Links } from "./components/Links";
import style from "./style.module.css";
import axios from "axios";
import { useDataFetching } from "./hooks/useFetchData";
import { useEffect, useState } from "react";
import { Links as typeLinks } from "../types/url";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from "./components/Footer";

function App() {
  const { user, isLoading } = useAuth0();

  const [dataStorage, setDataStorage] = useState<typeLinks[]>(() =>
    JSON.parse(localStorage.getItem("url") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("url", JSON.stringify(dataStorage));
  }, [dataStorage]);

  const { data, setData, fetchData, loading } = useDataFetching(
    import.meta.env.VITE_DB_URL
  );

  const onSubmit = async (
    name: string,
    original_url: string,
    userID?: string | undefined
  ) => {
    try {
      if (name && original_url && userID) {
        await axios.post(import.meta.env.VITE_DB_URL, {
          name,
          original_url,
          userID,
        });
        fetchData();
      } else if (!userID && name && original_url) {
        const response = await axios.post(import.meta.env.VITE_DB_URL, {
          name,
          original_url,
        });

        setDataStorage([...data, response.data]);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      if (user && !isLoading) {
        await axios.delete(import.meta.env.VITE_DB_URL + id);
        const updatedData = data.filter((item) => item.short_url !== id);
        setData(updatedData);
      } else {
        const updateDataStorage = dataStorage.filter(
          (item) => item.short_url !== id
        );
        setDataStorage(updateDataStorage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.app}>
      <Container>
        <Header />
        <main className="main">
          <Hero />
          <Form onSubmit={onSubmit} />
          <Links
            dataStorage={dataStorage}
            data={data}
            onDelete={onDelete}
            loading={loading}
          />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
