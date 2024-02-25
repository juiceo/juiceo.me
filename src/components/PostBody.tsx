import { PropsWithChildren } from "react";
import styles from "./PostBody.module.css";

export const PostBody = (props: PropsWithChildren<{}>) => {
  return (
    <main className={styles.container}>
      <div className="flex-1 max-w-2xl">{props.children}</div>
    </main>
  );
};
