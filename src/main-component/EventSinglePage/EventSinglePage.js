import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import Events from "../../api/events";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const EventSinglePage = (props) => {
  const { slug } = useParams();

  const EventDetails = Events.find((item) => item.slug === slug);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Header hclass={"header--styleFour"} />
      <main className="page_content about-page">
        <PageTitle pageTitle={EventDetails.title} pagesub={"Event"} />
        <section className="stories pt-130 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-30">
                <div className="innerWrapper">
                  <div className="donationDetails storiesDetails">
                    <div className="donationDetails__header mb-45">
                      <figure className="thumb mb-45">
                        <img src={EventDetails.esImg2} alt="Gainioz" />
                      </figure>
                    </div>
                    <h3 className="eventsBlock__heading text-uppercase">
                      {EventDetails.title}
                    </h3>
                    <div className="eventsBlock__meta">
                      <ul>
                        <li>
                          <span className="eventsBlock__meta__title">
                            Featured :
                          </span>
                          <span className="eventsBlock__meta__text">
                            {EventDetails.date}
                          </span>
                        </li>
                        <li>
                          <span className="eventsBlock__meta__title">
                            Mogadishu :
                          </span>
                          <span className="eventsBlock__meta__text">
                            {EventDetails.address}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="donationDetails__text storiesDetails__text storiesDetails__text--first mb-30">
                      We have curated and showcased an extraordinary collection
                      of Somali women’s creative works, featuring visual art,
                      poetry, and performance. The exhibition, “A Window to Her
                      Worlds,” brings together the talents of 11 female artists
                      who explore themes of peace, identity, and cultural
                      resilience. Through paintings, photography, sketches, and
                      mixed media, the exhibition highlights the depth of Somali
                      women’s narratives, their ability to shape conversations,
                      and their role in preserving heritage. The event also
                      includes an engaging Buraanbur performance, a powerful
                      form of Somali oral poetry performed by five young women.
                      This rhythmic and expressive tradition has long been a
                      medium for Somali women to share stories, express
                      resilience, and inspire unity.
                    </p>
                    <h4 className="donationDetails__heading mb-25">
                      Exhibition Highlights & Artistic Journey
                    </h4>
                    <p className="donationDetails__text mb-30">
                      Held at the National Museum of Somalia, this exhibition is
                      not just an art showcase but a dialogue on reconciliation
                      and cultural preservation. With an immersive curation that
                      blends poetry, visual storytelling, and interactive
                      experiences, it provides audiences—especially youth,
                      women’s groups, and cultural enthusiasts—with a profound
                      insight into the power of artistic expression.
                    </p>
                    <p className="donationDetails__text mb-30">
                      Through this initiative, we celebrate women as
                      storytellers, artists, and change-makers, ensuring that
                      their voices continue to shape Somalia’s cultural and
                      social landscape.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <figure className="thumb mb-35">
                          <img src={EventDetails.esImg5} alt="Gainioz" />
                        </figure>
                      </div>
                      <div className="col-lg-6">
                        <figure className="thumb mb-35">
                          <img src={EventDetails.esImg3} alt="Gainioz" />
                        </figure>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <figure className="thumb mb-35">
                          <img src={EventDetails.esImg} alt="Gainioz" />
                        </figure>
                      </div>
                      <div className="col-lg-6">
                        <figure className="thumb mb-35">
                          <img src={EventDetails.esImg4} alt="Gainioz" />
                        </figure>
                      </div>
                    </div>

                    {/* <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="eventAddress">
                          <ul>
                            <li>
                              <h3 className="eventAddress__heading">
                                Event Date
                              </h3>
                              <span> {EventDetails.date}</span>
                            </li>
                            <li>
                              <h3 className="eventAddress__heading">
                                Event Location
                              </h3>
                              <span>{EventDetails.address}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    {/* <h4 className="donationDetails__heading mb-25">
                      If you need to join this event
                    </h4> */}
                    {/* <Link
                      onClick={ClickHandler}
                      className="btn btn--styleOne btn--primary it-btn"
                      to="/donation-listing"
                    >
                      <span className="btn__text">join the journey</span>
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
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-30">
                <div className="innerWrapperSidebar">
                  <div className="sidebarWidget">
                    <div className="sidebarTitle">
                      <h5 className="sidebarTitle__heading text-uppercase mb-30">
                        Direct Contact us
                      </h5>
                    </div>
                    <form className="sidebarContacts" onSubmit={SubmitHandler}>
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
                        className="btn btn--styleOne btn--primary it-btn"
                        type="submit"
                      >
                        <span className="btn__text">send massage</span>
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
        </section>
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EventSinglePage;
