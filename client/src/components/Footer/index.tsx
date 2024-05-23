import style from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        Hecho por{" "}
        <a href="https://www.linkedin.com/in/santiagovitelli/">
          Santiago Vitelli
        </a>{" "}
        🧑‍💻
      </p>
    </footer>
  );
};
