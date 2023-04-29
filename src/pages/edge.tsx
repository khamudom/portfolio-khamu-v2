/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PageLayout } from '@/components';
import { edgePageData } from './pageData';

const edge = () => {
  return (
    <PageLayout page={edgePageData}>
      <section className="project-intro">
        <div className="container">
          <div className="project-link">
            <h1>Microsoft Edge</h1>
            <span className="btn-container">
              <a
                href="https://www.microsoft.com/en-us/edge?form=MA13FJ"
                target="_blank"
                className="btn"
                title="website"
              >
                <i className="fa-solid fa-globe"></i> Website
              </a>
            </span>
          </div>
          <p>
            Collaborated with the design team to build web components for
            multiple experiences for Microsoft Edge, Edge Shopping and Microsoft
            News
          </p>
          <hr className="divider" />
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="portfolio">
            <div className="image">
              <img src="../assets/img/edge/coupon.png" alt="coupon" />
              <span>
                <p>Shopping flyout</p>
              </span>
            </div>
            <div className="description">
              <h2>Edge shopping</h2>
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
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="portfolio">
            <div className="description">
              <h2>Edge news feed</h2>
              <p>
                The browser has a customizable news feed feature that allows
                users to see news articles and other content from their favorite
                websites and news sources.
              </p>
              <br />
              <p>
                I helped iterate on the article component, along with updating
                the native-ad and info-pane-ad components, which are used
                specifically for ads within the feed.
              </p>
            </div>
            <div className="image">
              <img src="../assets/img/edge/feed.png" alt="feed" />
              <span>
                <p>News feed</p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="portfolio vertical-tab">
            <div className="image">
              <img src="../assets/img/edge/vert-tab.png" alt="vertical tab" />
              <span>
                <p>Vertical tabs</p>
              </span>
            </div>
            <div className="description">
              <h2>Vertical tabs</h2>
              <p>
                Edge has the ability to set vertical tabs. It allows the users
                to view tabs on the side of the browser instead of up top.
              </p>
              <br />
              <p>
                Collaborating with the project manager and the motion designer,
                I created a prototype to help the team iterate on the slide out
                animation of the tab panel when it is in the collapsed state.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <div className="portfolio devtool">
            <div className="description">
              <h2>High Contrast in Developer Tools</h2>
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
            <div className="image">
              <img src="../assets/img/edge/devtool-hc.png" alt="devtool" />
              <span>
                <p>This is set to high contrast dark theme</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default edge;
