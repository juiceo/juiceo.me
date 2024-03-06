import { PropsWithChildren } from "react";
import styles from "./PageLayout.module.css";
import { NavBar } from "@/components/NavBar";

export const PageLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {props.children}
    </div>
  );
};
