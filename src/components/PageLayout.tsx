import { PropsWithChildren } from "react";
import styles from "./PageLayout.module.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { AnimatedGradients } from "@/components/Gradients";

export const PageLayout = (props: PropsWithChildren<{}>) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <AnimatedGradients />
      <div className={styles.layoutContent}>{props.children}</div>
      <Footer />
    </div>
  );
};
