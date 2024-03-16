import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Links } from "./components/Links";
import style from "./style.module.css";
import axios from "axios";
import { useDataFetching } from "../hooks/useFetchData";

function App() {
  const { data, setData, fetchData, loading } = useDataFetching(
    import.meta.env.VITE_DB_URL
  );

  const onSubmit = async (name: string, original_url: string) => {
    try {
      const response = await axios.post(import.meta.env.VITE_DB_URL, {
        name,
        original_url,
      });
      fetchData();
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      await axios.delete(import.meta.env.VITE_DB_URL + id);
      const updatedData = data.filter((item) => item.short_url !== id);
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.app}>
      <Container>
        <Header />
        <main className="main">
          <Hero />
          <Form onSubmit={onSubmit} />
          <Links data={data} onDelete={onDelete} loading={loading} />
        </main>
      </Container>
    </div>
  );
}

export default App;
