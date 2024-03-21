import style from "./style.module.css";
import { GetNewDate } from "../../../utils/GetNewDate";

type Props = {
  name: string;
  link: string;
  shorter: string;
  createAt: string | Date;
  onDelete: (id: string) => void;
};

export const Link = ({ name, link, shorter, createAt, onDelete }: Props) => {
  const date = new Date(createAt);
  const newShortUrl = `${import.meta.env.VITE_DB_URL}${shorter}`;

  const handleDelete = () => {
    onDelete(shorter);
  };

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
      <td className={style.links__td}>
        <GetNewDate date={date} />
      </td>
      <td className={style.links__td}>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
};
