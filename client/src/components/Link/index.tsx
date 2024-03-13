import style from "./style.module.css";

type Props = {
  name: string;
  link: string;
  shorter: string;
};

export const Link = ({ name, link, shorter }: Props) => {
  return (
    <article className={style.links__article}>
      <h3 className={style.title}>{name}</h3>
      <div>
        <p>Link original</p>
        <a href={link}>{link}</a>
      </div>
      <div>
        <p>Link recortado</p>
        <a href="#">{shorter}</a>
      </div>
    </article>
  );
};
