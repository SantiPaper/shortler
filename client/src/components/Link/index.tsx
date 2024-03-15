import style from "./style.module.css";

type Props = {
  name: string;
  link: string;
  shorter: string;
};

export const Link = ({ name, link, shorter }: Props) => {
  return (
    <tr className={style.links__tr}>
      <td className={style.links__td}>
        <h3 className={style.title}>{name}</h3>
      </td>
      <td className={style.links__td}>
        <a href="#">
          {"https://www.shortler/"}
          {shorter}
        </a>
      </td>
      <td className={style.links__td}>
        <a href={link}>{link}</a>
      </td>
      <td className={style.links__td}>2023</td>
    </tr>
  );
};
