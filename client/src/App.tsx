import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LinkTable } from "./components/LinkTable";
import style from "./style.module.css";
import axios from "axios";
import { useDataFetching } from "./hooks/useFetchData";
import { useEffect, useState } from "react";
import { Links as TypeLinks } from "../types/url";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer } from "./components/Footer";

function App() {
  const { user, isLoading } = useAuth0();

  const { data, setData, fetchData, loading } = useDataFetching(
    import.meta.env.VITE_DB_URL
  );

  const [dataStorage, setDataStorage] = useState<TypeLinks[]>(() =>
    JSON.parse(localStorage.getItem("url") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("url", JSON.stringify(dataStorage));
  }, [dataStorage]);

  const onSubmit = async (
    name: string,
    original_url: string,
    userID?: string
  ) => {
    if (!name || !original_url) return;

    try {
      const { data: responseData } = await axios.post(
        import.meta.env.VITE_DB_URL,
        {
          name,
          original_url,
          userID,
        }
      );

      if (!userID) {
        setDataStorage([...data, responseData]);
      } else {
        fetchData();
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const onDelete = async (id: string) => {
    const filterById = (item: TypeLinks) => item.short_url !== id;
    try {
      if (user && !isLoading) {
        await axios.delete(import.meta.env.VITE_DB_URL + id);
        const updatedData = data.filter(filterById);
        setData(updatedData);
      } else {
        const updateDataStorage = dataStorage.filter(filterById);
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
          <LinkTable
            data={user ? data : dataStorage}
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
