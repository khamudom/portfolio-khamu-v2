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
          <div className="portfolio xbox-process">
            <div className="description">
              <p>
                The FAST team does not only focus on the open source project,
                but also works closely with our internal partners. The team
                works with design, to help designers iterate on their respective
                features through building internal components and prototyping,
                using the FAST technology.
              </p>
              <br />
              <p>
                I helped in the early iterations on the Edge prototype app. The
                app mimics the real browser, and is used to help visual,
                interaction and motion designers see and iterate on their
                features before it gets implemented into production.
              </p>
              <br />
              <p>
                The Edge app was also beneficial to creating components. For
                example, when I built the Settings pages and populated them our
                components, it helped me to see what the components would look
                like in the product, help to make any needed API adjustments and
                address styles making sure they were aligned with the design
                specs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.image}>
            <img
              src="../assets//images/fast/fast-site.png"
              alt="fast portfolio"
            />
            <p>Fast website</p>
          </div>
          <div className={styles.description}>
            <h2>Fast website</h2>
            <p>
              As a group effort I helped contribute to creating the FAST
              <a
                className="link"
                href="https://www.fast.design/"
                target="_blank"
                title="fast website"
              >
                website.
              </a>
              Had an opportunity to lead a few interns on the this project along
              with building the
              <a
                className="link"
                href="https://github.com/microsoft/fast/tree/master/sites/fast-website/src/app/components/navigation"
                target="_blank"
                title="navigation code"
              >
                navigation
              </a>
              and
              <a
                className="link"
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
        <div className={styles.description}>
          <h2>Accessibility in mind</h2>

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
              className="link"
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
              className="link"
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

      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.description}>
            <h2>Fluent UI</h2>
            <p>
              The team also owns the
              <a
                className="link"
                href="https://developer.microsoft.com/en-us/fluentui#/get-started/webcomponents"
                target="_blank"
                title="fluent ui"
              >
                Fluent UI web components.
              </a>
              The process is once I built the components in FAST foundation, I
              would add them to the Fluent UI web components package.
            </p>
            <br />
            <p>
              Most of my contribution is the high contrast work in this package
              and I addressing any style issues.
            </p>
          </div>
          <div className={styles.image}>
            <img src="../assets/images/fast/fluent.png" alt="fluent" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default fast;
