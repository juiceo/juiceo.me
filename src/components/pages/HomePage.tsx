"use client";
import styles from "./HomePage.module.css";
import { range } from "lodash";
import {
  RiArticleLine,
  RiGithubFill,
  RiLinkedinFill,
  RiRssFill,
} from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import React from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "usehooks-ts";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.foreground}>
        <h1 className={styles.title}>juiceo.me</h1>
        <MobileNav />
      </div>
      <div className={styles.background}>
        <BackgroundGrid />
      </div>
    </div>
  );
};

const MobileNav = () => {
  const visible = useMediaQuery("(max-width: 768px)", {
    initializeWithValue: false,
    defaultValue: false,
  });
  return (
    <motion.div
      animate={{ height: visible ? "auto" : 0 }}
      transition={{
        delay: visible ? 0 : 0.5,
      }}
    >
      <AnimatePresence>
        {visible && (
          <>
            <MobileNavItem position={1} label="Blog" href="/posts" />
            <MobileNavItem
              position={2}
              label="GitHub"
              href="https://github.com/juiceo"
            />
            <MobileNavItem
              position={3}
              label="LinkedIn"
              href="https://linkedin.com/li/juusolappalainen1"
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MobileNavItem = (props: {
  position: number;
  label: string;
  href: string;
}) => {
  const { position, label, href } = props;
  return (
    <motion.a
      href={href}
      target={href.startsWith("/") ? "_self" : "_blank"}
      rel="noreferrer noopener"
      initial={{
        x: -50,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: position * 0.15,
        },
      }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
      }}
    >
      <p className={styles.mobileNavLink}>{label}</p>
    </motion.a>
  );
};

const BackgroundGrid = () => {
  return (
    <div className={styles.backgroundGrid}>
      {range(400).map((i) => {
        return (
          <div className={styles.backgroundGridItem} key={i}>
            {i === 248 && <PostsItem key={i} />}
            {i === 213 && <LinkedInItem key={i} />}
            {i === 214 && <GitHubItem key={i} />}
          </div>
        );
      })}
    </div>
  );
};

const TooltipItem = (
  props: PropsWithChildren<{ label: string; href: string }>
) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  return (
    <a
      className={styles.tooltipItem}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      onMouseOut={() => setMousePos(null)}
      aria-label={props.label}
      href={props.href}
      target={props.href.startsWith("/") ? "_self" : "_blank"}
      rel="noreferrer noopener"
    >
      {props.children}
      {mousePos &&
        createPortal(
          <Tooltip
            key={`tooltip-${props.label}`}
            label={props.label}
            x={mousePos.x}
            y={mousePos.y}
          />,
          document.body
        )}
    </a>
  );
};

const GitHubItem = () => {
  return (
    <TooltipItem label="GitHub" href="https://github.com/juiceo">
      <RiGithubFill size={20} />
    </TooltipItem>
  );
};

const LinkedInItem = () => {
  return (
    <TooltipItem
      label="LinkedIn"
      href="https://linkedin.com/in/juusolappalainen1"
    >
      <RiLinkedinFill size={20} />
    </TooltipItem>
  );
};

const PostsItem = () => {
  return (
    <TooltipItem label="Blog" href="/posts">
      <RiRssFill size={20} />
    </TooltipItem>
  );
};

const Tooltip = (props: { label: string; x: number; y: number }) => {
  const { label, x, y } = props;
  return (
    <div
      className={styles.tooltipWrapper}
      style={{
        top: y,
        left: x,
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.tooltipLabel}
      >
        {label}
      </motion.p>
      <div className={styles.tooltipBar} />
    </div>
  );
};
