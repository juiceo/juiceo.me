import { PropsWithChildren } from "react";
import styles from "./PostBody.module.css";
import { intlFormat, intlFormatDistance } from "date-fns";

export interface PostBodyProps {
  publishedDate: string;
}

export const PostBody = (props: PropsWithChildren<PostBodyProps>) => {
  return (
    <main className={styles.container}>
      <div className={styles.publishedDate}>
        <p className=" text-gray-400 text-sm">
          {intlFormat(
            props.publishedDate,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
            { locale: "en-US" }
          )}{" "}
          ({intlFormatDistance(props.publishedDate, new Date())})
        </p>
      </div>
      <div className="flex-1 text-slate-300 text-lg">{props.children}</div>
    </main>
  );
};
