import style from "./style.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

export const Form = () => {
  const [link, setLink] = useState<string>("");
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setLink(ev.target.value);
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(link);
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Link para acortar"
          type="text"
          id="link"
          className={style.form__input}
          onChange={handleChange}
        />
        <label className="sr-only" htmlFor="link">
          Link para acortar
        </label>
        <button className={style.form__button}>Acortar</button>
      </form>
    </div>
  );
};
