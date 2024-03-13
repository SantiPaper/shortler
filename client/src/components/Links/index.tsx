import { Link } from "../Link";
import style from "./style.module.css";

export const Links = () => {
  const mockArr = [
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
  ];

  return (
    <section className={style.links}>
      {mockArr.map((link) => (
        <Link
          link={link.link}
          name={link.name}
          key={link.id}
          shorter={link.shorter}
        />
      ))}
    </section>
  );
};
