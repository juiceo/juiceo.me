import { PropsWithChildren } from "react";
import styles from "./Patterns.module.css";
import classNames from "classnames";

export const WavePattern = (props: PropsWithChildren) => {
  return (
    <div className={classNames(styles.container, styles.wavePattern)}>
      {props.children}
    </div>
  );
};

export const FadePattern = (props: PropsWithChildren) => {
  return (
    <div className={classNames(styles.container, styles.fadePattern)}>
      {props.children}
    </div>
  );
};
