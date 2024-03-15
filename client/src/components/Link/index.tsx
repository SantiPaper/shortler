import style from "./style.module.css";
import { getNewDate } from "../../../utils/getNewDate";

type Props = {
  name: string;
  link: string;
  shorter: string;
  createAt: string;
};

export const Link = ({ name, link, shorter, createAt }: Props) => {
  const date = new Date(createAt);

  const dateString = getNewDate(date);

  const newShortUrl = `${import.meta.env.VITE_DB_URL}${shorter}`;

  return (
    <tr className={style.links__tr}>
      <td className={style.links__td}>
        <h3 className={style.title}>{name}</h3>
      </td>
      <td className={style.links__td}>
        <a href={newShortUrl}>
          {import.meta.env.VITE_DB_URL}
          {shorter}
        </a>
      </td>
      <td className={style.links__td}>
        <a href={link}>{link}</a>
      </td>
      <td className={style.links__td}>{dateString}</td>
    </tr>
  );
};
