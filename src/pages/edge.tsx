/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PageLayout } from '@/components';
import { edgePageData } from '../models/PageData';
import styles from '../styles/Page.module.scss';
import Image from 'next/image';

const edge = () => {
  return (
    <PageLayout page={edgePageData}>
      <section className={styles.section}>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.imageColumnWrapper}>
              <img
                src="/assets/images/edge/shop-coupon.png"
                alt="coupon"
                height={450}
                width={360.85}
              />
              <p className={styles.caption}>Shopping flyout</p>
            </div>
            <div className={styles.description}>
              <h2 className={styles.heading}>Microsoft Edge shopping</h2>
              <p>
                A feature to share multiple ways to help online shoppers save
                money.
              </p>
              <br />
              <p>
                Components built for this features are coupon, cashback and
                shopping-recommendation. <br />
                The components are consumed and implemented by our developing
                partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.description}>
              <h2 className={styles.heading}>Edge News Feed</h2>
              <p>The browser has a customizable news feed feature.</p>
              <br />
              <p>
                I helped iterate on the article, info-pane-ad and native-ad
                components, which are the main components you see on the feed.
              </p>
            </div>
            <div className={styles.imageColumnWrapper}>
              <img
                src="/assets/images/edge/feed.png"
                alt="feed"
                width={598.04}
                height={400}
              />
              <p className={styles.caption}>News Feed 1.0</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.imageColumnWrapper}>
            <img
              src="/assets/images/edge/verticaltab.gif"
              alt="vertical tab"
              width={550}
              height={367.87}
            />
            <p className={styles.caption}>Vertical tabs</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.heading}>Vertical tabs</h2>
            <p>
              Vertical tabs allows the users to dock their tabs on the side of
              the browser window.
            </p>
            <br />
            <p>
              I built a prototype to help the motion designer iterate on the
              slide out and in animation of the tab panel when it is in the
              collapsed state.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.description}>
            <h2 className={styles.heading}>High Contrast in Developer Tools</h2>
            <p>
              A big contribution to Edge and Chromium was making sure, when
              <a
                className={styles.link}
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors"
                target="_blank"
                title="navigation code"
              >
                forced-colors
              </a>
              mode, also known has
              <a
                className={styles.link}
                href="https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696"
                target="_blank"
                title="navigation code"
              >
                Windows high contrast
              </a>
              mode, is enabled, the developer tools are visually accessible.
            </p>
            <br />
            <p>
              Consulting with the Edge dev tools and the Chromium team, I
              applied forced colors solutions to each developer tool elements
              that were visually broken in high contrast.
            </p>
          </div>
          <div className={styles.imageColumnWrapper}>
            <img
              src="/assets/images/edge/devtool-hc.png"
              alt="devtool"
              width={550}
              height={367.87}
            />

            <p className={styles.caption}>High contrast dark theme</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default edge;
