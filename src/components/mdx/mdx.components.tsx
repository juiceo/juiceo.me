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

export const h4 = (props: PropsWithChildren<{}>) => (
  <h4 className={styles.h4}>{props.children}</h4>
);

export const h5 = (props: PropsWithChildren<{}>) => (
  <h5 className={styles.h5}>{props.children}</h5>
);

export const h6 = (props: PropsWithChildren<{}>) => (
  <h6 className={styles.h6}>{props.children}</h6>
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
    <Image {...props} alt={props.alt} width={300} height={300} />
    {props.alt ?? <p>{props.alt}</p>}
  </div>
);
