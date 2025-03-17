import React, { Fragment } from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Header from "../../components/header/Header";
import Donation from "../../api/donation";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
// import Bg from "../../images/bg/missionBg.jpg";
import shape1 from "../../images/shapes/pagebreadcumbShapeTop.svg";
import shape2 from "../../images/shapes/pagebreadcumbShapeBottom.svg";
// import icon from "../../images/icons/mission-icon1.svg";
// import icon2 from "../../images/icons/mission-icon2.svg";
// import icon3 from "../../images/icons/mission-icon3.svg";
// import icon4 from "../../images/icons/mission-icon4.svg";

const DonationSinglePage = (props) => {
  const { slug } = useParams();
  const [isOpen, setOpen] = useState(false);
  const DonationDetails = Donation.find((item) => item.slug === slug);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };
  const Bg = DonationDetails.sImg;

  return (
    <Fragment>
      <Header hclass={"header--styleFour"} />
      <main className="main">
        <PageTitle
          pageTitle={DonationDetails.title}
          pagesub={"Details 😃"}
          pageTop={"Podcasts"}
        />

        <section className="donation pt-130 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-30">
                <div className="innerWrapper">
                  <div className="donationDetails">
                    <div className="donationDetails__header mb-45">
                      <section
                        className="missionSection missionSection--style1 position-relative"
                        style={{ backgroundImage: `url(${Bg})` }}
                      >
                        <div className="sectionShape sectionShape--top">
                          <img src={shape1} alt="Gainioz" />
                        </div>
                        <div className="sectionShape sectionShape--bottom">
                          <img src={shape2} alt="Gainioz" />
                        </div>
                        <div className="container">
                          <div className="row align-items-center">
                            <div className="missionVideo">
                              <div className="mission-video-main">
                                <div className="promo-video">
                                  <div className="waves-block">
                                    <div className="waves wave-1"></div>
                                    <div className="waves wave-2"></div>
                                    <div className="waves wave-3"></div>
                                  </div>
                                </div>
                                <button
                                  onClick={() => setOpen(true)}
                                  className="video video-popup mfp-iframe"
                                  data-lity
                                >
                                  <i className="fa fa-play"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId={DonationDetails.videoId}
                        onClose={() => setOpen(false)}
                      />
                      <h3 className="donationDetails__title text-uppercase">
                        {DonationDetails.title}
                      </h3>
                    </div>

                    {/* Podcast Destails and descriptions */}
                    <p className="donationDetails__text mb-30">
                      We have covered many special events such as fireworks,
                      fairs, parades, races, walks, awards ceremonies, fashion
                      shows, sporting events, and even a memorial service.
                    </p>
                    <p className="donationDetails__text mb-30">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vulputate vestibulum rhoncus, dolor eget viverra
                      pretium, dolor tellus aliquet nunc, vitae ultricies erat
                      elit eu lacus. Vestibulum non justo consectetur, cursus
                      ante, tincidunt sapien. Nulla quis diam sit amet turpis
                      interd enim. Vivamus faucibus ex sed nibh egestas
                      elementum. Mauris et bibendum dui. Aenean consequat
                      pulvinar luctus. Suspendisse consectetur tristique tortor
                    </p>
                    {/* The guest's Destails and descriptions */}
                    <h3 className="donationDetails__heading mb-25">
                      About this Guest
                    </h3>
                    <h4 className="donationDetails__heading mb-25">
                      Guest name
                    </h4>
                    <p className="donationDetails__text mb-30">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vulputate vestibulum Phasellus rhoncus, dolor
                      eget viverra pretium, dolor tellus aliquet nunc, vitae
                      ultricies erat elit eu lacus. Vestibulum non justo
                      consectetur, cursus ante, tincidunt sapien. Nulla quis
                      diam sit amet turpis interdum accumsan quis nec enim.
                      Vivamus faucibus ex sed nibh egestas elementum. Mauris et
                      bibendum dui. Aenean consequat pulvinar luctus
                    </p>
                    <p className="donationDetails__text mb-30">
                      We have covered many special events such as fireworks,
                      fairs, parades, races, walks, awards ceremonies, fashion
                      shows, sporting events, and even a memorial service.
                    </p>
                    <p className="donationDetails__text mb-30">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur vulputate vestibulum Phasellus rhoncus, dolor
                      eget viverra pretium, dolor tellus aliquet nunc, vitae
                      ultricies erat elit eu lacus. Vestibulum non justo
                      consectetur, cursus ante, tincidunt sapien. Nulla quis
                      diam sit amet turpis interdum accumsan quis nec enim.
                      Vivamus faucibus ex sed nibh egestas elementum. Mauris et
                      bibendum dui. Aenean consequat pulvinar luctus.
                      Suspendisse consectetur tristique tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <div className="sidebarLayout">
                  <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                      <div className="sidebarTitle">
                        <h5 className="sidebarTitle__heading text-uppercase mb-30">
                          Recent Post
                        </h5>
                      </div>
                      <div className="sidebarCategories">
                        {Donation.map((item, index) => (
                          <ul key={index}>
                            <li>
                              <Link to={`/Podcasts-details/${item.slug}`}>
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="innerWrapperSidebar mb-30">
                    <div className="sidebarWidget">
                      <div className="sidebarTitle">
                        <h5 className="sidebarTitle__heading text-uppercase mb-30">
                          Contact Info..
                        </h5>
                      </div>
                      <div className="sidebarContact">
                        <ul>
                          <li>
                            <span>Adress :</span>
                            Aden Adde Airport
                          </li>
                          <li>
                            <span>Mail :</span>
                            Info@safespace.com
                          </li>
                          <li>
                            <span>Phone :</span>
                            +252 617535337
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="innerWrapperSidebar">
                    <div className="sidebarWidget">
                      <div className="sidebarTitle">
                        <h5 className="sidebarTitle__heading text-uppercase mb-30">
                          Direct Contact us
                        </h5>
                      </div>
                      <form
                        className="sidebarContacts"
                        onSubmit={SubmitHandler}
                      >
                        <input
                          type="text"
                          className="sidebarContacts__input"
                          placeholder="Enter name*"
                        />
                        <input
                          type="email"
                          className="sidebarContacts__input"
                          placeholder="Enter your mail*"
                        />
                        <textarea
                          className="sidebarContacts__input textarea"
                          name="message"
                          id="message"
                          placeholder="Massage*"
                        ></textarea>
                        <button
                          className="btn btn--styleOne btn--secondary it-btn"
                          type="submit"
                        >
                          <span className="btn__text">Sumbit now</span>
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
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default DonationSinglePage;
