/* eslint-disable @next/next/no-img-element */
import { PageLayout } from '@/components';
import React from 'react';
import { fastPageData } from '../models/PageData';
import styles from '../styles/Page.module.scss';

const fast = () => {
  return (
    <PageLayout page={fastPageData}>
      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.imageWrapper}>
            <img
              src="/assets//images/fast/fast-site.png"
              alt="fast portfolio"
            />
            <p className={styles.caption}>Fast website</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.heading}>Fast website</h2>
            <p>
              Contributed to creating the FAST
              <a
                className={styles.link}
                href="https://www.fast.design/"
                target="_blank"
                title="fast website"
              >
                website.
              </a>
              Had an opportunity to lead a few interns on the this project along
              with building the
              <a
                className={styles.link}
                href="https://github.com/microsoft/fast/tree/master/sites/fast-website/src/app/components/navigation"
                target="_blank"
                title="navigation code"
              >
                navigation
              </a>
              and
              <a
                className={styles.link}
                href="https://github.com/microsoft/fast/tree/master/sites/fast-website/src/app/components/section-header"
                target="_blank"
                title="section header code"
              >
                section-header
              </a>
              components. The site was built using the FAST technology.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Accessibility in mind</h2>
          <p>
            I help contribute to a few components to the react (which has been
            deprecated) and web component libraries. My biggest contribution was
            owning the high contrast work for both FAST and Fluent UI.
          </p>
          <br />
          <p>
            Making sure FAST components are accessible is important to the
            project. Not only were they built to follow the best practices and
            patterns from the ARIA
            <a
              className={styles.link}
              href="https://www.w3.org/WAI/ARIA/apg/"
              target="_blank"
              title="accessibility guides"
            >
              Authoring Practice Guide
            </a>
            but I made sure our components meet the high contrast standards,
            visually and when using assisted technology.
          </p>
          <br />
          <p>
            My personal mission was to not only meet the standards, but to make
            sure the components still looked nice in high contrast. In addition,
            to help the community understand, or to build components in high
            contrast, I wrote up a
            <a
              className={styles.link}
              href="https://www.fast.design/docs/design-systems/high-contrast"
              target="_blank"
              title="high contrast document"
            >
              document
            </a>
            regarding it.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default fast;
