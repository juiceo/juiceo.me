"use client";
import styles from "./PostTOC.module.css";
import classNames from "classnames";

type Heading = {
  id: string;
  slug: string;
  title: string;
  level: number;
};

export interface PostTOCProps {
  headings: Heading[];
}

export const PostTOC = (props: PostTOCProps) => {
  const { headings } = props;
  const filteredHeadings = headings.filter((heading) => heading.level <= 2);
  return (
    <div className={styles.container}>
      <p className={styles.label}>Table of contents</p>
      {filteredHeadings.map((heading) => (
        <PostTOCItem heading={heading} key={heading.id} />
      ))}
    </div>
  );
};

const PostTOCItem = (props: { heading: Heading }) => {
  const { heading } = props;

  return (
    <a href={`#${heading.slug}`} key={heading.id}>
      <p
        className={classNames({
          [styles.headingLevel1]: heading.level === 1,
          [styles.headingLevel2]: heading.level === 2,
        })}
      >
        {heading.title}
      </p>
    </a>
  );
};
