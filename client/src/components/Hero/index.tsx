import style from "./style.module.css";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <h1 className={style.hero__text}>Acortador de enlaces</h1>
      <p className={style.hero__description}>
        Enlaces más simples y menos tediosos
      </p>
    </section>
  );
};
