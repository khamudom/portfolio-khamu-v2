import React from 'react';

type HeroProps = {
  className?: string;
};

const Hero = ({ className }: HeroProps) => {
  return (
    <>
      <section className={className}>
        <div className="container grid-2">
          <div className="column-left">
            <h1 className="header-title">Welcome</h1>
            <h2 className="header-subtitle">
              I am Kham, a design-minded front-end engineer
            </h2>
            <p className="text header-description">
              I focus on creating fully accessible user interface and
              experiences, from prototyping to production.
            </p>
            <span className="btn-container header-btn">
              <a href="#about" className="btn">
                ABOUT ME
              </a>
              <a href="./assets/khamu-resume.pdf" className="btn" download>
                RESUME
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
