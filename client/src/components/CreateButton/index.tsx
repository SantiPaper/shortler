import style from "./style.module.css";

type Props = {
  toggleForm: (showForm: boolean) => void;
  showForm: boolean;
};

export const CreateButton = ({ toggleForm, showForm }: Props) => {
  const handleClick = () => {
    toggleForm(!showForm);
  };
  return (
    <button onClick={handleClick} className={style.button}>
      {!showForm ? "Acortar link" : "Ocultar"}
    </button>
  );
};
