"use client";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPos(window.scrollY);
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const windowHeight = window.innerHeight;

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
      <p>Nav item 1</p>
      <p>Nav item 2</p>
      <p>Nav item 3</p>
    </nav>
  );
};
