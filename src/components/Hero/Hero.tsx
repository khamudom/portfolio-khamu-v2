/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Hero.module.scss";
import { FiDownload } from "react-icons/fi";
import Button from "../Button/Button";

type HeroProps = {
  className?: string;
};

const Hero = ({ className }: HeroProps) => {
  return (
    <>
      <section className={className}>
        <div className={styles.container}>
          <div className={styles.columnLeft}>
            <h2 className={styles.title}>
              A design-minded <br></br>front-end engineer
            </h2>
            <p className={styles.description}>
              Combining design, animation and technology to build and implement
              accessible and inclusive user interfaces and experiences in
              prototypes and web applications.
            </p>
            <div className={styles.btnContainer}>
              <Button href="/assets/KhamUdomResume.pdf" download>
                <FiDownload />
                RESUME
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
