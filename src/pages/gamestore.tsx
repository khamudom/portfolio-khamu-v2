import React from 'react';
import { PageLayout } from '@/components';
import { gameStorePageData } from '@/models/PageData';
import styles from '@/styles/Page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const gamestore = () => {
  return (
    <PageLayout page={gameStorePageData}>
      <section className={styles.section}>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={`${styles.imageColumnWrapper} ${styles.details}`}>
              <Image
                src="/assets/images/gamesite/game-desktop.png"
                alt="coupon"
                width={483.45}
                height={400}
              />
              <p className={styles.caption}>Desktop</p>
            </div>
            <div className={`${styles.imageColumnWrapper} ${styles.details}`}>
              <Image
                src="/assets/images/gamesite/game-tablet.png"
                alt="coupon"
                width={278.56}
                height={400}
              />
              <p className={styles.caption}>Tablet</p>
            </div>
            <div className={`${styles.imageColumnWrapper} ${styles.details}`}>
              <Image
                src="/assets/images/gamesite/game-mobile.png"
                alt="coupon"
                width={183.29}
                height={400}
              />
              <p className={styles.caption}>Mobile</p>
            </div>
          </div>
          <div className={styles.bottomElement}>
            <p>
              The comp can be found{' '}
              <Link
                className={styles.link}
                href="https://www.pinterest.com/pin/767582330225996826/"
                target="_blank"
              >
                here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default gamestore;
