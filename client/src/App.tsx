import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { CreateButton } from "./components/CreateButton";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Links } from "./components/Links";
import style from "./style.module.css";
import axios from "axios";
import { Links as typeLinks } from "../types/url";

function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_DB_URL);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState<Array<typeLinks>>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const [showForm, setShowForm] = useState<boolean>(false);

  const toggleForm = (showForm: boolean) => {
    setShowForm(showForm);
  };

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

  return (
    <div className={style.app}>
      <Container>
        <Header />
        <main className="main">
          <Hero />
          <CreateButton toggleForm={toggleForm} showForm={showForm} />
          {showForm ? <Form onSubmit={onSubmit} /> : null}
          <Links data={data} />
        </main>
      </Container>
    </div>
  );
}

export default App;
