import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../HomePage/HomePage";
import HomePage2 from "../HomePage2/HomePage2";
import HomePage3 from "../HomePage3/HomePage3";
import HomePage4 from "../HomePage4/HomePage4";
import AboutUsPage from "../AboutUsPage/AboutUsPage";

import DonationSinglePage from "../DonationSinglePage/DonationSinglePage";
import Podcasts from "../Podcasts/Podcasts";
import StorySinglePage from "../StorySinglePage/StorySinglePage";
import TeamPage from "../TeamPage/TeamPage";
import TeamSinglePage from "../TeamSinglePage/TeamSinglePage";
import EventPage from "../EventPage/EventPage";
import ShopPage from "../ShopPage/ShopPage";
import ProductSinglePage from "../ProductSinglePage/ProductSinglePage";
import CartPage from "../CartPage/CartPage";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import ServicePage from "../ServicePage/ServicePage";
import ServiceSinglePage from "../ServiceSinglePage/ServiceSinglePage";
import BlogPage from "../BlogPage/BlogPage";
import BlogDetails from "../BlogDetails/BlogDetails";
import EventSinglePage from "../EventSinglePage/EventSinglePage";
import ContactPage from "../ContactPage/ContactPage";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutUsPage />} />

          <Route path="events" element={<EventPage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />

          <Route path="Podcasts-listing" element={<Podcasts />} />
          <Route
            path="Podcasts-details/:slug"
            element={<DonationSinglePage />}
          />

          <Route path="contact" element={<ContactPage />} />

          <Route path="story-details/:slug" element={<StorySinglePage />} />
          <Route path="volunteers" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="products" element={<ShopPage />} />
          <Route path="product-single/:slug" element={<ProductSinglePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />

          <Route path="blog-details/:slug" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
