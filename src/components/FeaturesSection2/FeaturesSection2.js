import React, { useState } from "react";
import Services from "../../api/service";
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const FeaturesSection2 = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="feature pt-130" id="feature">
      <div className="container">
        <div className="sectionTitle mb-20">
          <span className="sectionTitle__small">
            <i className="fa-solid fa-heart btn__icon"></i>
            WHAT WE DO
          </span>
          <h2 className="sectionTitle__big">WE WANT MAKE IMPACT TOGETHER</h2>
        </div>

        <div className="row gx-35">
          {Services.slice(0, 3).map((service, srv) => (
            <div className="col-lg-4" key={srv}>
              <div className="keyFeatureBlock keyFeatureBlock--style2 mb-30">
                <div className="keyFeatureBlock__left">
                  <span className="keyFeatureBlock__icon">
                    <img src={service.icon} alt="Gainioz Feature_Icon" />
                  </span>
                </div>
                <div className="keyFeatureBlock__content">
                  <h3 className="keyFeatureBlock__heading">
                    <Link
                      onClick={ClickHandler}
                      to={`#`}
                      className="keyFeatureBlock__heading__link"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="keyFeatureBlock__text">{service.description}</p>
                  <Link
                    onClick={ClickHandler}
                    to={`#`}
                    className="keyFeatureBlock__link"
                  >
                    <span className="keyFeatureBlock__link__dot"></span>
                    <span className="keyFeatureBlock__link__dot"></span>
                    <span className="keyFeatureBlock__link__dot"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
