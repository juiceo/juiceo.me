"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./PostTOC.module.css";
import classNames from "classnames";
import { throttle } from "lodash";
import { Heading } from "extract-md-headings";

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

    return activeHeadings.pop()?.id?.toString() ?? null;
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

  return (
    <div className={styles.container}>
      <h6 className={styles.label}>Table of contents</h6>
      <div className={styles.tocList}>
        {filteredHeadings.map((heading) => (
          <PostTOCItem
            heading={heading}
            isActive={activeHeadingId === heading.id.toString()}
            key={heading.id}
          />
        ))}
      </div>
    </div>
  );
};

const PostTOCItem = (props: { heading: Heading; isActive?: boolean }) => {
  const { heading } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById(heading.slug)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a href={`#${heading.slug}`} key={heading.id} onClick={handleClick}>
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
