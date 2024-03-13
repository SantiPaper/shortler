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
    const link = formData.get("link")!.toString();

    const linkOnSubmit = {
      name,
      link,
    };

    const valuesGift = Object.values(linkOnSubmit);

    if (valuesGift.some((v) => !v)) {
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
            placeholder="Ej: Santiago linkedin"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="link">Link para acortar</label>
          <input
            className={style.form__input}
            placeholder="Link para acortar"
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
