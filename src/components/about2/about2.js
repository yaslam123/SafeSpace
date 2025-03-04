import React from "react";
import { Link } from "react-router-dom";
import about1 from "../../images/man/about-thumb-1.jpg";

const About2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="about pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="sponsorsTitle sponsorsTitle--style2">
            <span className="sponsorsTitle__line"></span>
            <h2 className="sponsorsTitle__heading text-uppercase">
              ABOUT SAFE SPACE SOMALIA
            </h2>
            <span className="sponsorsTitle__line"></span>
          </div>
          <div className="col-lg-6 mb-30 pt-30">
            <div className="aboutContent aboutContent--style2">
              <div className="sectionTitle mb-20">
                <span className="sectionTitle__small">
                  <i className="fa-solid fa-heart btn__icon"></i>
                  ABOUT SAFE SPACE SOMALIA
                </span>
                <h2 className="sectionTitle__big">
                  what have we done with your help
                </h2>
              </div>
              <p className="aboutContent__text">
                With your support, we have created inclusive platforms where
                women, youth, and marginalized communities can share their
                voices and shape the future of Somalia. Through digital
                advocacy, policy engagement, and cultural mobilization, we are
                fostering social cohesion and promoting peacebuilding
                initiatives across the country.
              </p>
              <span className="aboutContent__quote">
                Join our action, and together, we can build a more inclusive and
                empowered society.
              </span>
              <div className="aboutContent__buttons">
                <Link
                  onClick={ClickHandler}
                  to="/about"
                  className="btn btn--styleOne btn--primary it-btn"
                >
                  <span className="btn__text">Find Out More About Us</span>
                  <i className="fa-solid fa-heart btn__icon"></i>
                  <span className="it-btn__inner">
                    <span className="it-btn__blobs">
                      <span className="it-btn__blob"></span>
                      <span className="it-btn__blob"></span>
                      <span className="it-btn__blob"></span>
                      <span className="it-btn__blob"></span>
                    </span>
                  </span>
                  <svg
                    className="it-btn__animation"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <defs>
                      <filter>
                        <feGaussianBlur
                          in="SourceGraphic"
                          result="blur"
                          stdDeviation="10"
                        ></feGaussianBlur>
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                          result="goo"
                        ></feColorMatrix>
                        <feBlend
                          in2="goo"
                          in="SourceGraphic"
                          result="mix"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="aboutThumb">
              <div className="aboutThumb__text">
                <span className="aboutThumb__text__title">..Since..</span>
                <span className="aboutThumb__text__year">1998</span>
              </div>
              <figure className="aboutThumb__figure m-0">
                <img src={about1} alt="Gainioz About" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
