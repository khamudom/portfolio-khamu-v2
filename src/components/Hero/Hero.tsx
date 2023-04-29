import React from 'react';
import styles from './Hero.module.scss';
import { FiDownload } from 'react-icons/fi';
import Button from '../common/Button/Button';

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
              I am Kham, a design-minded front-end engineer.
            </h2>
            <p className={styles.description}>
              Passionate about design, animation and technology to build and
              implement accessible and inclusive user interfaces and experiences
              from prototypes to production.
            </p>
            <div className={styles.btnContainer}>
              <Button href="./assets/KhamU-resume.pdf" download>
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
