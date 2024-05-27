import { useAuth0 } from "@auth0/auth0-react";
import style from "./style.module.css";
import { FormEvent } from "react";

type Props = {
  onSubmit: (name: string, link: string, userID?: string | undefined) => void;
};

export const Form = ({ onSubmit }: Props) => {
  const { user, isLoading } = useAuth0();

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")!.toString();
    const link = formData.get("link")!.toString();

    const userEmail = user?.email;

    const linkOnSubmit = {
      name,
      link,
    };

    const valuesLink = Object.values(linkOnSubmit);

    if (valuesLink.some((v) => !v)) {
      return;
    }

    if (!isLoading && !user) {
      onSubmit(name, link);
    } else {
      onSubmit(name, link, userEmail);
    }

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.container}>
        <div className={style.inputContainer}>
          <label htmlFor="name">Nombre</label>
          <input
            className={style.form__input}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="link">Enlace</label>
          <input
            className={style.form__input}
            type="url"
            id="link"
            name="link"
            required
          />
        </div>
      </div>
      <button className={style.form__button}>
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            d="M1.469 3.75a3.5 3.5 0 0 0 5.617 4.11l.883.51c.025.092.147.116.21.043.15-.176.318-.338.5-.484.286-.23.3-.709-.018-.892l-.825-.477A3.501 3.501 0 0 0 1.47 3.75Zm2.03 3.482a2 2 0 1 1 2-3.464 2 2 0 0 1-2 3.464ZM9.956 8.322a2.75 2.75 0 0 0-1.588 1.822L7.97 11.63l-.884.51A3.501 3.501 0 0 0 1.47 16.25a3.5 3.5 0 0 0 6.367-2.81l10.68-6.166a.75.75 0 0 0-.182-1.373l-.703-.189a2.75 2.75 0 0 0-1.78.123L9.955 8.322ZM2.768 15.5a2 2 0 1 1 3.464-2 2 2 0 0 1-3.464 2Z"
            clipRule="evenodd"
          />
          <path d="M12.52 11.89a.5.5 0 0 0 .056.894l3.274 1.381a2.75 2.75 0 0 0 1.78.123l.704-.189a.75.75 0 0 0 .18-1.373l-3.47-2.004a.5.5 0 0 0-.5 0L12.52 11.89Z" />
        </svg>
        Acortar
      </button>
    </form>
  );
};
