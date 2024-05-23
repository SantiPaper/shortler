import { Authenticator } from "../Authenticator";
import style from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <p className={style.headerTitle}>Shortler</p>
      <Authenticator />
    </header>
  );
};
