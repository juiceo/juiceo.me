import { PropsWithChildren } from "react";
import styles from "./PostWrapper.module.css";

export interface PostWrapperProps {}

export const PostWrapper = (props: PropsWithChildren<PostWrapperProps>) => {
  return (
    <div className={styles.container}>
      <div>{props.children}</div>
    </div>
  );
};
