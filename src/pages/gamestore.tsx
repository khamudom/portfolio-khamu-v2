/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PageLayout } from '@/components';
import { gameStorePageData } from '@/models/PageData';
import styles from '@/styles/Page.module.scss';

const gamestore = () => {
  return (
    <PageLayout page={gameStorePageData}>
      <section className={styles.section}>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={`${styles.imageWrapper} ${styles.details}`}>
              <img
                src="/assets/images/gamesite/game-desktop.png"
                alt="coupon"
              />
              <p className={styles.caption}>Desktop</p>
            </div>
            <div className={`${styles.imageWrapper} ${styles.details}`}>
              <img src="/assets/images/gamesite/game-tablet.png" alt="coupon" />
              <p className={styles.caption}>Tablet</p>
            </div>
            <div className={`${styles.imageWrapper} ${styles.details}`}>
              <img src="/assets/images/gamesite/game-mobile.png" alt="coupon" />
              <p className={styles.caption}>Mobile</p>
            </div>
          </div>
          <div className={styles.bottomElement}>
            <p>
              The comp can be found{' '}
              <a
                href="https://www.pinterest.com/pin/767582330225996826/"
                target="_blank"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default gamestore;
