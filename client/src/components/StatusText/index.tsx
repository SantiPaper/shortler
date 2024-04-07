import style from "./stlye.module.css";

type Props = {
  text: string;
};

export const StatusText = ({ text }: Props) => {
  return <h2 className={style.text}>{text}</h2>;
};
