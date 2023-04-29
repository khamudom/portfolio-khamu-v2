/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PageLayout } from '@/components';
import { gameStorePageData } from '@/models/PageData';
import styles from '@/styles/Page.module.scss';

const gamestore = () => {
  return (
    <PageLayout page={gameStorePageData}>
      <section className={styles.section}>
        <div className={styles.row}>
          <div className={`${styles.imageWrapper} ${styles.details}`}>
            <img
              src="../assets/images/gamesite/game-desktop.png"
              alt="coupon"
            />
            <p>Desktop</p>
          </div>
          <div className={`${styles.imageWrapper} ${styles.details}`}>
            <img src="../assets/images/gamesite/game-tablet.png" alt="coupon" />
            <p>Tablet</p>
          </div>
          <div className={`${styles.imageWrapper} ${styles.details}`}>
            <img src="../assets/images/gamesite/game-mobile.png" alt="coupon" />
            <p>Mobile</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default gamestore;
