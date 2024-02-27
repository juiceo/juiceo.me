"use client";
import styles from "./PostHeader.module.css";
import { TypeAnimation } from "react-type-animation";

import { useState } from "react";
import classNames from "classnames";

export interface PostHeaderProps {
  title: string;
  description: string;
}

export const PostHeader = (props: PostHeaderProps) => {
  const [isTyped, setIsTyped] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      {isTyped ? (
        <h1 className={styles.title}>
          {props.title}
          <span
            style={{
              width: "10px",
              display: "inline-block",
            }}
          />
        </h1>
      ) : (
        <TypeAnimation
          sequence={[
            props.title,
            () => {
              setIsTyped(true);
            },
          ]}
          wrapper="h1"
          cursor
          className={styles.title}
        />
      )}
      <p
        className={classNames(styles.subtitle, {
          [styles.subtitleVisible]: isTyped,
        })}
      >
        {props.description}
      </p>
    </div>
  );
};
