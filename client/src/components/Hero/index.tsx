import style from "./style.module.css";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <h1 className={style.hero__text}>
        Una solucion simple para enlaces complicados
      </h1>
      <p className={style.hero__description}>
        Acorta tus links, que dejen de ser tan tediosos
      </p>
    </section>
  );
};
