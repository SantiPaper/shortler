import style from "./style.module.css";
import { FormEvent } from "react";

type Props = {
  onSubmit: (name: string, link: string) => void;
};

export const Form = ({ onSubmit }: Props) => {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")!.toString();
    let link = formData.get("link")!.toString();

    if (!link.startsWith("https://www.")) {
      link = "https://www." + link;
    }

    const linkOnSubmit = {
      name,
      link,
    };

    const valuesLink = Object.values(linkOnSubmit);

    if (valuesLink.some((v) => !v)) {
      return;
    }
    onSubmit(linkOnSubmit.name, linkOnSubmit.link);
    form.reset();
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            className={style.form__input}
            type="text"
            id="name"
            placeholder="Perfil linkedin"
            name="name"
          />

          <label htmlFor="link">Link para acortar</label>
          <input
            className={style.form__input}
            placeholder="https://www.linkedin.com/in/santiagovitelli/"
            type="text"
            id="link"
            name="link"
          />
        </div>
        <button className={style.form__button}>Acortar</button>
      </form>
    </div>
  );
};
