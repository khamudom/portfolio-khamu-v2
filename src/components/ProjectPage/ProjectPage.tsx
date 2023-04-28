/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '../common/Button/Button';
import { FiGlobe } from 'react-icons/fi';
import styles from './ProjectPage.module.scss';
import YouTube from 'react-youtube';

interface ProjectPageProps {
  children?: React.ReactNode;
}

const ProjectPage = ({ children }: ProjectPageProps) => {
  return (
    <main className={styles.container}>
      <section className={styles.headerSection}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>Xbox One</h1>
          <span className={styles.btnWrapper}>
            <Button
              href="https://www.xbox.com/en-US/"
              target="_blank"
              title="Xbox website"
            >
              <FiGlobe className={styles.btnIcon} /> Website
            </Button>
          </span>
        </div>
        <p>
          Create, contribute, iterate and own the UI and UX experiences on the
          Xbox Dashboard, from the launch of the Xbox One to the release of the
          Xbox One S/X
        </p>
        <br />
        <p>
          Collaborate with the console design team to champion the design and
          help the team understand the product development capabilities and
          limits. In addition, collaborate with the console development product
          team to convey the design vision. Pair program with the engineers,
          where I would focus on implementing or addressing bugs on the UI and
          UX, while they focused on the functionality of the product.
        </p>
        <div className={styles.technology}>
          <h3>Technology</h3>
          <p>
            XAML &#183; XAML data binding &#183; MVVM consumption &#183; Compass
          </p>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.dash}>
          <p>2013 Dashboard release</p>
          <div className={styles.images}>
            <img src="/assets/images/xbox/dash2013.png" alt="dashboard 2013" />
            <img src="/assets/images/xbox/dash2013game.png" alt="games 2013" />
          </div>
        </div>
        <div className={styles.dash}>
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
        <div className={styles.dash17}>
          <span>
            <p>2017 Dashboard release</p>
            <a
              href="https://news.xbox.com/en-us/2017/10/16/fall-update-xbox-one-2017/"
              target="_blank"
            >
              Additional details
            </a>
          </span>
          <YouTube className={styles.video} videoId="s946FOBDmDk" />
        </div>
        <div className={styles.dashApp}>
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
    </main>
  );
};

export default ProjectPage;
