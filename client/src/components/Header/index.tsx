import { Authenticator } from "../Authenticator";
import style from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <h2 className={style.headertitle}>Shortler</h2>
      <Authenticator />
    </header>
  );
};
