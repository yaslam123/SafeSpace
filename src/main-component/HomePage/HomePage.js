import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero2/hero2";
import About from "../../components/about2/about2";
import FeaturesSection from "../../components/FeaturesSection2/FeaturesSection2";
import DonationListSection from "../../components/DonationListSection/DonationListSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import PartnerSection from "../../components/PartnerSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <main className="page_content">
          <Hero />
          <About />
          <FeaturesSection />
          <DonationListSection />
          <BlogSection />
          <PartnerSection />
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage;
