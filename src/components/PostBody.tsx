import { PropsWithChildren } from "react";
import styles from "./PostBody.module.css";
import { intlFormat, intlFormatDistance } from "date-fns";

export interface PostBodyProps {
  publishedDate: string;
}

export const PostBody = (props: PropsWithChildren<PostBodyProps>) => {
  return (
    <main className={styles.container}>
      <p className={styles.publishedDate}>
        {intlFormat(
          props.publishedDate,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
          { locale: "en-US" }
        )}
      </p>
      <div className={styles.content}>{props.children}</div>
    </main>
  );
};
