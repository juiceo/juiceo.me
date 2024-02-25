import { PropsWithChildren } from "react";
import styles from "./mdx.module.css";
import { RiInformationLine, RiLink } from "react-icons/ri";
import slug from "slug";
import Link from "next/link";

export const h1 = (props: PropsWithChildren<{}>) => {
  const titleSlug = slug(props.children?.toString() ?? "");
  return (
    <Link className={styles.hashLink} href={`#${titleSlug}`}>
      <div className={styles.hashLinkIcon}>
        <RiLink size={24} />
      </div>
      <h1 id={titleSlug} className={styles.h1}>
        {props.children}
      </h1>
    </Link>
  );
};

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
  <>
    <img
      {...props}
      alt={props.alt}
      className={`${styles.image} w-full rounded-lg border-gray-700 border-2`}
    />
    <span
      className={`${styles.imageCaption} text-xs text-center mt-1 w-full block`}
    >
      {props.alt}
    </span>
  </>
);

export const blockquote = (props: PropsWithChildren<{}>) => {
  return (
    <aside className={styles.blockQuote}>
      {props.children}
      <div className={styles.blockQuoteIcon}>
        <RiInformationLine size={36} />
      </div>
    </aside>
  );
};

export const a = (props: PropsWithChildren<{}>) => (
  <a
    className={styles.a}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);
