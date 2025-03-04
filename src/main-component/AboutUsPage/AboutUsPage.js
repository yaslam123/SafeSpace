import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import AboutTab from "./AboutTab";
import FeaturesSection from "../../components/FeaturesSection2/FeaturesSection2";
import BlogSection from "../../components/BlogSection/BlogSection";
import FunFactSection from "../../components/FunFact/FunFact";
import TeamSection from "../../components/TeamSection/TeamSection";

const AboutUsPage = (props) => {
  return (
    <Fragment>
      <Header hclass={"header--styleFour"} />
      <main className="main about-page">
        <PageTitle pageTitle={"About Us"} pagesub={"About"} />
        <section className="about pt-120 pb-105">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sectionTitle text-center mb-30">
                  <span className="sectionTitle__small justify-content-center">
                    <i className="fa-solid fa-heart btn__icon"></i>
                    ABOUT SAFE SPACE SOMALIA
                  </span>
                  <h2 className="sectionTitle__big">
                    CREATING SAFE SPACES, FOSTERING INCLUSION
                  </h2>
                </div>
              </div>
              <div className="col-lg-10 mx-auto">
                <div className="aboutDetails text-center">
                  <p className="aboutDetailsText mb-20">
                    Safe Space Somalia (S3) is a civil society organization
                    dedicated to fostering social cohesion, inclusivity, and
                    empowerment in Somalia. Through digital platforms, policy
                    advocacy, and cultural initiatives, we create safe spaces
                    where women, youth, and marginalized communities can express
                    their voices, drive change, and shape a more equitable
                    society. We believe that every voice matters and that by
                    amplifying stories, research, and community action, we can
                    bridge divides, challenge discrimination, and build lasting
                    peace. Our work focuses on empowering marginalized groups
                    through storytelling, advocacy, and engagement, shaping
                    policies that promote peace, reconciliation, and
                    inclusivity, and mobilizing communities through cultural
                    initiatives, creative projects, and oral history. At Safe
                    Space Somalia, we do more than start conversations—we turn
                    ideas into action. Together, we are creating a Somalia where
                    everyone has a voice, and every community thrives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AboutTab />
        <FeaturesSection />
        <BlogSection />
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutUsPage;
