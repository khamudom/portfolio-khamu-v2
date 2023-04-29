/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PageLayout } from '@/components';
import { xboxPageData } from './pageData';
import styles from '../styles/Page.module.scss';
import YouTube from 'react-youtube';

const xbox = () => {
  return (
    <PageLayout page={xboxPageData}>
      <section className={styles.contentSection}>
        <div className={styles.screen}>
          <p>2013 Dashboard release</p>
          <div className={styles.images}>
            <img src="/assets/images/xbox/dash2013.png" alt="dashboard 2013" />
            <img src="/assets/images/xbox/dash2013game.png" alt="games 2013" />
          </div>
        </div>
        <div className={styles.screen}>
          <p>2015 Dashboard release</p>
          <div className={styles.images}>
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
        <div className={styles.screen17}>
          <span>
            <p>2017 Dashboard release</p>
            <a
              href="https://news.xbox.com/en-us/2017/10/16/fall-update-xbox-one-2017/"
              target="_blank"
            >
              <p>More Details</p>
            </a>
          </span>
          <YouTube className={styles.video} videoId="s946FOBDmDk" />
        </div>
        <div className={styles.screenApp}>
          <p>Details and Game and Apps pages</p>
          <div className={styles.images}>
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
