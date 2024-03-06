import style from "./style.module.css";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <h1 className={style.hero__text}>Acortartador de links</h1>
      <p className={style.hero__description}>
        Que sean simples, que dejen de ser tan tediosos
      </p>
    </section>
  );
};
