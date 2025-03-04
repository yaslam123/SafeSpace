import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../images/logos/logo_1.svg";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = (props) => {
  const [searchActive, setSearchState] = useState(false);
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { carts } = props;

  return (
    <div>
      <header
        className={`header header--styleOne sticky-on  ${
          isSticky ? "sticky" : ""
        }  ${props.hclass}`}
      >
        <div id="sticky-placeholder"></div>
        <div className="container container--custom">
          <div className="row">
            <div className="col-12">
              <div className="header__wrapper">
                <div className="header__logo">
                  <Link
                    onClick={ClickHandler}
                    to="/home"
                    className="header__logo__link"
                  >
                    <img
                      src={logo}
                      alt="Gainioz"
                      className="header__logo__image"
                    />
                  </Link>
                </div>
                <div className="header__menu">
                  <nav className="mainMenu">
                    <ul>
                      <li className="dropdown">
                        <Link onClick={ClickHandler} to="/home">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/events">
                          Our Work
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/Podcasts-listing">
                          Podcasts
                        </Link>
                      </li>

                      <li>
                        <Link onClick={ClickHandler} to="/contact">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header__right">
                  <div className="header__button">
                    <Link
                      onClick={ClickHandler}
                      className="btn btn--styleOne btn--secondary it-btn"
                      to="/contact"
                    >
                      <span className="btn__text">Get In Touch</span>
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
            </div>
          </div>
        </div>
      </header>
      {/* header--mobile */}
      <div
        className="header header--mobile cc-header-menu mean-container position-relative"
        id="meanmenu"
      >
        <div className="mean-bar headerBurgerMenu">
          <Link onClick={ClickHandler} to="/">
            <img className="mean-bar__logo" alt="Techkit" src={logo} />
          </Link>
          <div className="header__right">
            <div className="header__actions">
              <ul>
                <li>
                  <button
                    className={`headerBurgerMenu__button sidebarBtn ${
                      mobailActive ? "opened" : ""
                    }`}
                    aria-label="Main Menu"
                    onClick={() => setMobailState(!mobailActive)}
                  >
                    <svg width="50" height="50" viewBox="0 0 100 100">
                      <path
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                      />
                      <path className="line line2" d="M 20,50 H 80" />
                      <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* mobail-left */}
      <div className={`cc cc--slideNav ${mobailActive ? "show" : ""}`}>
        <div className="cc__logo mb-40">
          <Link onClick={ClickHandler} to="/">
            <img className="mean-bar__logo" alt="Techkit" src={logo} />
          </Link>
        </div>
        <div className="offscreen-navigation mb-40">
          <nav className="menu-main-primary-container">
            <MobileMenu />
          </nav>
        </div>
        <div className="itSocial itSocial--sidebar mb-40">
          <ul>
            <li>
              <Link
                onClick={ClickHandler}
                className="facebook"
                to="/"
                rel="nofollow"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link
                onClick={ClickHandler}
                className="twitter"
                to="/"
                rel="nofollow"
              >
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                onClick={ClickHandler}
                className="instagram"
                to="/"
                rel="nofollow"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                onClick={ClickHandler}
                className="linkedin"
                to="/"
                rel="nofollow"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="cc__button">
          <div className="header__button">
            <Link
              onClick={ClickHandler}
              className="btn btn--styleOne btn--secondary it-btn"
              to="/donation-listing"
            >
              <span className="btn__text">Contact Us</span>
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
                  <filter id="goo">
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

      {/* search */}
      <div
        id="template-search"
        className={`template-search ${searchActive ? "open" : ""}`}
      >
        <button
          type="button"
          className="close"
          onClick={() => setSearchState(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <form className="search-form" onSubmit={SubmitHandler}>
          <input type="search" placeholder="Type your search" />
          <button type="submit" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps)(Header);
