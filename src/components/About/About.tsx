import React from 'react';

type AboutProps = {
  className?: string;
};

const About = ({ className }: AboutProps) => {
  return (
    <>
      <section className={className} id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">about</h2>
            <hr className="divider" />
          </div>
          <div className="about-body">
            <div className="about-me">
              <div className="personal-info">
                <div className="img-about">
                  <p className="text">
                    <span>Hello</span> and welcome to a small section about
                    myself. I reside in the great northwest, in the the state of
                    Washington. When I am not working I try to travel as often
                    as I can. My wife and I have two spoiled dogs that know how
                    to game the system to get anything they want.
                  </p>
                  <div className="img-me">
                    <img src="/assets/img/about/me04.jpg" alt="me" />
                    <img src="/assets/img/about/peru.jpg" alt="peru" />
                    <img src="/assets/img/about/turtle.jpg" alt="turtle" />
                    <img src="/assets/img/about/swselfie.jpg" alt="selfie" />
                  </div>
                </div>
                <div className="dog-info">
                  <div className="dog">
                    <img
                      src="/assets/img/about/milo.png"
                      alt="milo"
                      className="img-milo"
                    />
                    <p className="text">
                      <b>Milo</b>
                      <br />
                      Our not so little Cavalier King Charles Spaniel puppy.
                      This pup will eat just about anything.
                    </p>
                  </div>
                  <div className="dog">
                    <img
                      src="/assets/img/about/lenny.png"
                      alt="lenny"
                      className="img-lenny"
                    />
                    <p className="text">
                      <b>Lenny</b>
                      <br />
                      Our Miniature Poodle who was rescued from South Korea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="career-info">
              <p className="text">
                I have been blessed and fortunate to work and learn from amazing
                developers, including designers, on all of my projects. From
                products like Xbox to contributing in open source projects.
              </p>
              <br />
              <p className="text">
                My background is computer animation and after 12 years in the
                video game industry I switched my career from creating 3D art to
                coding UI and UX. But even working as an artist I have always
                had a love for some form of coding. From time to time I would
                build websites for family and friends.
              </p>
              <br />
              <p className="text">
                But it was not until after I left my heavily art focused world
                behind and started working on Windows Phone and then Xbox, that
                I finally found the discipline as a UX engineer. Implementing
                design into the product made sense to me. To be able to champion
                exciting design, from visual to motion, and bring the vision to
                life inside the product.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
