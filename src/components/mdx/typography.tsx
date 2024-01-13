import { PropsWithChildren } from "react";
import styles from "./mdx.module.css";

export const H1 = (props: PropsWithChildren<{}>) => (
  <h1 className={styles.h1}>{props.children}</h1>
);

export const H2 = (props: PropsWithChildren<{}>) => (
  <h2 className={styles.h2}>{props.children}</h2>
);

export const H3 = (props: PropsWithChildren<{}>) => (
  <h3 className={styles.h3}>{props.children}</h3>
);

export const H4 = (props: PropsWithChildren<{}>) => (
  <h4 className={styles.h4}>{props.children}</h4>
);

export const H5 = (props: PropsWithChildren<{}>) => (
  <h5 className={styles.h5}>{props.children}</h5>
);

export const H6 = (props: PropsWithChildren<{}>) => (
  <h6 className={styles.h6}>{props.children}</h6>
);
