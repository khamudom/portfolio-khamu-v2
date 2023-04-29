/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PageLayout } from '@/components';
import { edgePageData } from '../models/PageData';
import styles from '../styles/Page.module.scss';

const edge = () => {
  return (
    <PageLayout page={edgePageData}>
      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.image}>
            <img src="../assets/images/edge/coupon.png" alt="coupon" />
            <p>Shopping flyout</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.heading}>Edge shopping</h2>
            <p>
              Edge has a built in feature to share multiple ways with online
              shoppers to help save money.
            </p>
            <br />
            <p>
              Working with the design team, I contributed the coupon, cashback
              and shopping-recommendation components. The components are then
              consumed and implemented by our developing partners.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.description}>
            <h2 className={styles.heading}>Edge news feed</h2>
            <p>
              The browser has a customizable news feed feature that allows users
              to see news articles and other content from their favorite
              websites and news sources.
            </p>
            <br />
            <p>
              I helped iterate on the article component, along with updating the
              native-ad and info-pane-ad components, which are used specifically
              for ads within the feed.
            </p>
          </div>
          <div className={styles.image}>
            <img src="../assets/images/edge/feed.png" alt="feed" />
            <p>News feed</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.image}>
            <img src="../assets/images/edge/vert-tab.png" alt="vertical tab" />
            <p>Vertical tabs</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.heading}>Vertical tabs</h2>
            <p>
              Edge has the ability to set vertical tabs. It allows the users to
              view tabs on the side of the browser instead of up top.
            </p>
            <br />
            <p>
              Collaborating with the project manager and the motion designer, I
              created a prototype to help the team iterate on the slide out
              animation of the tab panel when it is in the collapsed state.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.description}>
            <h2 className={styles.heading}>High Contrast in Developer Tools</h2>
            <p>
              A big contribution to Edge was making sure, when
              <a
                className="link"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors"
                target="_blank"
                title="navigation code"
              >
                forced-colors
              </a>
              mode, also known has
              <a
                className="link"
                href="https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696"
                target="_blank"
                title="navigation code"
              >
                Windows high contrast
              </a>
              mode, is enabled, the developer tools were also accessible.
            </p>
            <br />
            <p>
              Consulting with the Edge dev tools and the Chromium team, I
              applied forced colors solutions to each developer tool elements
              that were visually broken in high contrast.
            </p>
          </div>
          <div className={styles.image}>
            <img src="../assets/images/edge/devtool-hc.png" alt="devtool" />
            <span>
              <p>This is set to high contrast dark theme</p>
            </span>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default edge;
