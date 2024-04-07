import style from "./style.module.css";

export const Warn = () => {
  return (
    <p className={style.warn}>
      Al no tener una sesión activa solamente podrás acortar solamente 1 enlace!
    </p>
  );
};
