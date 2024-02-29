import { PropsWithChildren } from "react";
import style from "./style.module.css";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};
