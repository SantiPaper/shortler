import { Container } from "./components/Container";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Links } from "./components/Links";
import style from "./style.module.css";

function App() {
  return (
    <div className={style.app}>
      <Container>
        <Header />
        <main className="main">
          <Hero />
          <Form />
          <Links />
        </main>
      </Container>
    </div>
  );
}

export default App;
