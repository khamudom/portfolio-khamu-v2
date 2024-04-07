/* eslint-disable @next/next/no-img-element */
import { PageLayout } from "@/components";
import React from "react";
import { fastPageData } from "../models/PageData";
import styles from "../styles/Page.module.scss";
import Image from "next/image";

const fast = () => {
  return (
    <PageLayout page={fastPageData}>
      <section className={styles.section}>
        <div className={styles.row}>
          <div className={styles.imageColumnWrapper}>
            <img
              className={styles.fullImage}
              src="/assets/images/fast/fast-site.png"
              alt="fast portfolio"
              width={600}
              height={313.6}
            />
            <p className={styles.caption}>Fast website</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.heading}>Fast website</h2>
            <p>
              Contributed and leading a few interns, in creating the FAST
              <a
                className={styles.link}
                href="https://www.fast.design/"
                target="_blank"
                title="fast website"
              >
                website.
              </a>
              Built the
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
              components.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.column}>
          <h2 className={styles.heading}>Accessibility in mind</h2>
          <p>
            My biggest contribution was owning the high contrast work for both
            FAST and
            <a
              className={styles.link}
              href="https://learn.microsoft.com/en-us/fluent-ui/web-components/"
              target="_blank"
              title="fluent ui web components"
            >
              Fluent UI
            </a>
            libraries.
          </p>
          <br />
          <p>
            Made sure the components meet accessibility standards, I tested in
            high contrast, keyboard navigation, and screen readers, like Voice
            Over, Narrator and JAWS. Making sure FAST components are built to
            follow best practices and patterns from the ARIA
            <a
              className={styles.link}
              href="https://www.w3.org/WAI/ARIA/apg/"
              target="_blank"
              title="accessibility guides"
            >
              Authoring Practice Guide
            </a>
          </p>
          <br />
          <p>
            I wrote up a
            <a
              className={styles.link}
              href="https://www.fast.design/docs/design-systems/high-contrast"
              target="_blank"
              title="high contrast document"
            >
              document
            </a>
            to help the open source community and internal partners, build
            accessible components with high contrast in mind.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default fast;
