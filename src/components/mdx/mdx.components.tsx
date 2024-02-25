import { PropsWithChildren } from "react";
import Image from "next/image";
import styles from "./mdx.module.css";

export const h1 = (props: PropsWithChildren<{}>) => (
  <h1 className={styles.h1}>{props.children}</h1>
);

export const h2 = (props: PropsWithChildren<{}>) => (
  <h2 className={styles.h2}>{props.children}</h2>
);

export const h3 = (props: PropsWithChildren<{}>) => (
  <h3 className={styles.h3}>{props.children}</h3>
);

export const ul = (props: PropsWithChildren<{}>) => (
  <ul className={styles.ul}>{props.children}</ul>
);

export const br = (props: PropsWithChildren<{}>) => (
  <br className={styles.br}>{props.children}</br>
);

export const p = (props: PropsWithChildren<{}>) => (
  <p className={styles.p}>{props.children}</p>
);

export const img = (props: PropsWithChildren<any>) => (
  <div className={styles.imageWrapper}>
    <img
      {...props}
      alt={props.alt}
      className="w-full rounded-lg border-gray-700 border-2"
    />
    {props.alt && <p className="text-xs mt-1">{props.alt}</p>}
  </div>
);
