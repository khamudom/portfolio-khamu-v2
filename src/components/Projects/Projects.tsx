import React from 'react';

type ProjectsProps = {
  className?: string;
};

const Projects = ({ className }: ProjectsProps) => {
  return (
    <>
      <section className={className} id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">portfolio</h2>
            <hr className="divider" />
          </div>
          <ul className="projects-body">
            <li className="project">
              <div className="project-content">
                <img src="./assets/img/portfolio/xdash.png" alt="xbox" />
                <div className="content-container">
                  <div>
                    <a
                      id="transitionLink"
                      href="./pages/xbox.html"
                      target="_self"
                    >
                      <span className="title">Xbox One</span>
                    </a>
                    <p className="text">
                      Worked on the UI and UX of the dashboard, games, app and
                      store pages.
                    </p>
                  </div>
                  <div className="card-footer">
                    <span>Product</span>
                    <span className="icon-container">
                      <img src="./assets/img/icon/icon-xaml.png" alt="xaml" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-content">
                <img src="./assets/img/portfolio/fast.png" alt="fast" />
                <div className="content-container">
                  <div>
                    <a
                      id="transitionLink"
                      href="./pages/fast.html"
                      target="_self"
                    >
                      <span className="title">FAST</span>
                    </a>
                    <p className="text">
                      Build open source components using web component
                      technology.
                    </p>
                  </div>
                  <div className="card-footer">
                    <span>Open Source</span>
                    <span className="icon-container">
                      <img src="./assets/img/icon/icon-html5.png" alt="html" />
                      <img src="./assets/img/icon/icon-css.png" alt="css" />
                      <img
                        src="./assets/img/icon/icon-ts.png"
                        alt="typescript"
                      />
                      <img
                        src="./assets/img/icon/icon-wc.png"
                        alt="web component"
                      />
                      <img src="./assets/img/icon/icon-fast.png" alt="fast" />
                      <img src="./assets/img/icon/icon-react.png" alt="react" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-content">
                <img src="./assets/img/portfolio/edge.png" alt="edge" />
                <div className="content-container">
                  <div>
                    <a
                      id="transitionLink"
                      href="./pages/edge.html"
                      target="_self"
                    >
                      <span className="title">Microsoft Edge</span>
                    </a>
                    <p className="text">
                      Building components for different browser features and
                      experiences.
                    </p>
                  </div>
                  <div className="card-footer">
                    <span>Product</span>
                    <span className="icon-container">
                      <img src="./assets/img/icon/icon-html5.png" alt="html" />
                      <img src="./assets/img/icon/icon-css.png" alt="css" />
                      <img
                        src="./assets/img/icon/icon-ts.png"
                        alt="typescript"
                      />
                      <img
                        src="./assets/img/icon/icon-wc.png"
                        alt="web component"
                      />
                      <img src="./assets/img/icon/icon-fast.png" alt="fast" />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-content">
                <img
                  src="./assets/img/portfolio/clone-savebookmarks.png"
                  alt="bookmarks"
                />
                <div className="content-container">
                  <div>
                    <a
                      id="transitionLink"
                      href="./pages/bookmarks.html"
                      target="_self"
                    >
                      <span className="title">Save to Bookmarks Clone </span>
                    </a>
                    <p className="text">
                      Cloning and add a feature for experimentation purpose
                    </p>
                  </div>
                  <div className="card-footer">
                    <span>Exploration</span>
                    <span className="icon-container">
                      <img src="./assets/img/icon/icon-react.png" alt="react" />
                      <img
                        src="./assets/img/icon/icon-ts.png"
                        alt="typescript"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="project">
              <div className="project-content">
                <img src="./assets/img/portfolio/netflix.png" alt="netflix" />
                <div className="content-container">
                  <div>
                    <a
                      id="transitionLink"
                      href="./pages/netflix.html"
                      target="_self"
                    >
                      <span className="title">Netflix Clone </span>
                    </a>
                    <p className="text">Cloning Netflix for fun</p>
                  </div>
                  <div className="card-footer">
                    <span>Exploration</span>
                    <span className="icon-container">
                      <img src="./assets/img/icon/icon-react.png" alt="react" />
                      <img
                        src="./assets/img/icon/icon-ts.png"
                        alt="typescript"
                      />
                      <img
                        src="./assets/img/icon/icon-tailwind.png"
                        alt="tailwind"
                      />
                      <img
                        src="./assets/img/icon/icon-firebase.png"
                        alt="firebase"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Projects;
