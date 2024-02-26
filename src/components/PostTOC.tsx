"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./PostTOC.module.css";
import classNames from "classnames";
import { takeWhile, throttle } from "lodash";

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

  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
  const filteredHeadings = useMemo(
    () => headings.filter((heading) => heading.level <= 2),
    [headings]
  );

  const getActiveHeading = useCallback(() => {
    const activeHeadings = filteredHeadings.filter((heading) => {
      const id = heading.slug;
      const el = document.getElementById(id);
      const pos = el?.getBoundingClientRect().top;
      return !!pos && pos < 100;
    });

    return activeHeadings.pop()?.id ?? null;
  }, [filteredHeadings]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setActiveHeadingId(getActiveHeading());
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getActiveHeading]);

  console.log("ACTIVE HEADING", activeHeadingId);

  return (
    <div className={styles.container}>
      <p className={styles.label}>Table of contents</p>
      {filteredHeadings.map((heading) => (
        <PostTOCItem
          heading={heading}
          isActive={activeHeadingId === heading.id}
          key={heading.id}
        />
      ))}
    </div>
  );
};

const PostTOCItem = (props: { heading: Heading; isActive?: boolean }) => {
  const { heading } = props;

  return (
    <a href={`#${heading.slug}`} key={heading.id}>
      <p
        className={classNames(styles.heading, {
          [styles.headingLevel1]: heading.level === 1,
          [styles.headingLevel2]: heading.level === 2,
          [styles.headingActive]: props.isActive,
        })}
      >
        {heading.title}
      </p>
    </a>
  );
};
