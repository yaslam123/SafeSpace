import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Donation from "../../api/donation";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const Podcasts = (props) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredPodcasts =
    activeFilter === "all"
      ? Donation.slice(0, 6)
      : Donation.slice(0, 6).filter(
          (donation) => donation.category === activeFilter
        );

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <Fragment>
      <Header hclass={"header--styleFour"} />
      <main className="main">
        <PageTitle pageTitle={"Podcasts Listing"} pagesub={"Podcasts"} />
        <div className="about position-relative pt-125 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sectionTitle text-center mb-70">
                  <span className="sectionTitle__small justify-content-center">
                    <i className="fa-solid fa-heart btn__icon"></i>
                    Podcasts Listing
                  </span>
                  <h2 className="sectionTitle__big">Introduse Our Podcasts</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="featureTab featureTab--style2">
                  <div className="filter_elements_wrapper row gx-3">
                    {Donation.map((donation, index) => (
                      <div className="col-lg-4 col-sm-6 mb-35" key={index}>
                        <div
                          className={`featureBlock ${
                            activeIndex === index ? "featureBlock--active" : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter(index)}
                        >
                          <div className="featureBlock__wrap">
                            <figure className="featureBlock__thumb">
                              <Link
                                onClick={ClickHandler}
                                to={`/Podcasts-details/${donation.slug}`}
                                className="featureBlock__thumb__link"
                              >
                                <img
                                  src={donation.sImg}
                                  alt="Gainioz Featured Thumb"
                                />
                              </Link>
                            </figure>
                            <div className="featureBlock__content">
                              <h3 className="featureBlock__heading">
                                <Link
                                  onClick={ClickHandler}
                                  to={`/Podcasts-details/${donation.slug}`}
                                  className="featureBlock__heading__link"
                                >
                                  {donation.title}
                                </Link>
                              </h3>
                              <p className="featureBlock__text">
                                We help local nonprofits access the funding,
                                training, and support they need to become more
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default Podcasts;
