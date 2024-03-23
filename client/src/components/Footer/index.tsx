import style from "./style.module.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul>
        <li>
          <a href="https://github.com/SantiPaper">
            <FaGithub />
            <p>Github</p>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/SantiiVitellii">
            <FaTwitter />
            <p>Twitter</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/santiagovitelli/">
            <FaLinkedin />
            <p>Linkedin</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};
