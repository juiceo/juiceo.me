import { PropsWithChildren } from "react";
import styles from "./PostLayout.module.css";

export interface PostLayoutProps {}

export const PostLayout = (props: PropsWithChildren<PostLayoutProps>) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{props.children}</div>
    </div>
  );
};
