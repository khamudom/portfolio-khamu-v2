/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PageLayout } from '@/components';
import { xboxPageData } from '../models/PageData';
import styles from '../styles/Page.module.scss';
import YouTube from 'react-youtube';

const xbox = () => {
  return (
    <PageLayout page={xboxPageData}>
      <section className={styles.section}>
        <div className={styles.column}>
          <span className={styles.inlineText}>
            <h2 className={styles.xheading}>2013 Dashboard release</h2>
          </span>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/xbox/dash2013.png" alt="dashboard 2013" />
            <img src="/assets/images/xbox/dash2013game.png" alt="games 2013" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.column}>
          <span className={styles.inlineText}>
            <h2 className={styles.xheading}>2015 Dashboard release</h2>
          </span>
          <div className={styles.imageWrapper}>
            <img src="/assets/images/xbox/D2015Home.png" alt="dash 2015 home" />
            <img
              src="/assets/images/xbox/D2015Community.png"
              alt="dash 2015 community"
            />
            <img
              src="/assets/images/xbox/D2015OneGuide.png"
              alt="dash 2015 one guide"
            />
            <img
              src="/assets/images/xbox/D2015Store.png"
              alt="dash 2015 store"
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.column}>
          <span className={styles.inlineText}>
            <h2 className={styles.xheading}>2017 Dashboard release</h2>
            <a
              className={styles.link}
              href="https://news.xbox.com/en-us/2017/10/16/fall-update-xbox-one-2017/"
              target="_blank"
            >
              <p>More Details</p>
            </a>
          </span>
          <YouTube className={styles.video} videoId="s946FOBDmDk" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.column}>
          <span className={styles.inlineText}>
            <h2 className={styles.xheading}>Details and Game and Apps pages</h2>
          </span>
          <div className={`${styles.imageWrapper} ${styles.details}`}>
            <img src="/assets/images/xbox/Details01.png" alt="details page" />
            <img
              src="/assets/images/xbox/GamesAndApps.png"
              alt="my games and apps page"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default xbox;
