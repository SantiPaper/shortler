import { Link } from "../Link";
import style from "./style.module.css";
import { Links as typeLinks } from "../../../types/url";

type Props = {
  data: typeLinks[];
};

export const Links = ({ data }: Props) => {
  /* const mockArr = [
    {
      name: "Perfil linkedin",
      link: "https://www.facebook.com/irina.montanari/?locale=es_LA",
      id: 1,
      shorter: "https://www.vercel.com/asdfasf",
    },
    {
      name: "Perfil linkedin",
      link: "https://www.facebook.com/irina.montanari/?locale=es_LA",
      id: 3,
      shorter: "https://www.vercel.com/asdfasf",
    },
    {
      name: "Perfil linkedin",
      link: "https://www.facebook.com/irina.montanari/?locale=es_LA",
      id: 2,
      shorter: "https://www.vercel.com/asdfasf",
    },
  ]; */

  return (
    <section className={style.links}>
      {data.map((link) => (
        <Link
          link={link.original_url}
          name={link.name}
          key={link.short_url}
          shorter={link.short_url}
        />
      ))}
    </section>
  );
};
