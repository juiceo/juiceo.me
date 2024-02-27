"use client";
import { throttle } from "lodash";
import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Footer.module.css";
import { FooterWave } from "@/components/FooterWave";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterWave />
      <div className={styles.footerContent}>
        <h3 className={styles.footerThankYou}>Thanks for reading!</h3>
        <p>© 2024-present Juuso Lappalainen</p>
      </div>
    </footer>
  );
};
