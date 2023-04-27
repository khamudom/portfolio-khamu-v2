import React from 'react';
import styles from './Hero.module.scss';
import { FiDownload } from 'react-icons/fi';

type HeroProps = {
  className?: string;
};

const Hero = ({ className }: HeroProps) => {
  return (
    <>
      <section className={className}>
        <div className={styles.container}>
          <div className={styles.columnLeft}>
            <h1 className={styles.title}>Welcome</h1>
            <h2 className={styles.subTitle}>
              I am Kham, a design-minded front-end engineer
            </h2>
            <p className={styles.description}>
              Focusing on creating fully accessible user interface and
              experiences, from prototyping to production.
            </p>
            <div className={styles.btnContainer}>
              {/* <a href="#about" className={styles.btn}>
                ABOUT ME
              </a> */}
              <a
                href="./assets/khamu-resume.pdf"
                className={styles.btn}
                download
              >
                <span className={styles.btnContent}>
                  <FiDownload />
                  RESUME
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
