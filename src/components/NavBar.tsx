"use client";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./NavBar.module.css";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import Link from "next/link";

export const NavBar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPos(window.scrollY);
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <>
      <div className={styles.navbarWrapperTop}>
        <NavBarInner />
      </div>
      <div
        className={classNames(styles.navbarWrapperScrolled, {
          [styles.navbarWrapperScrolledVisible]: scrollPos > windowHeight,
        })}
      >
        <NavBarInner />
      </div>
    </>
  );
};

const NavBarInner = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link href="/">
          <h1>Juiceo</h1>
        </Link>
      </div>
      <div className={styles.navbarMid}>
        <Link href="/posts" className={styles.navLink}>
          All posts
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <Link
          href={"https://github.com/juiceo"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
        >
          <RiGithubFill size={32} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/juusolappalainen1/"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
        >
          <RiLinkedinFill size={32} />
        </Link>
      </div>
    </nav>
  );
};
