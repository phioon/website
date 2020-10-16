import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";
// core components
import Footer from "components/Footer/Footer.js";
// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";

import PresentationPage from "views/PresentationPage/PresentationPage.js";
import StrategiesPage from "views/StrategiesPage/StrategiesPage.js";
import WalletsPage from "views/WalletsPage/WalletsPage.js";
import PhiTraderPage from "views/PhiTraderPage/PhiTraderPage.js";

import { getString } from "core/lang";
import { getImage } from "core/images";
import { project } from "core/projectData";

var hist = createBrowserHistory();

var prefs = {
  langId: "ptBR",
  currency: {
    code: "BRL",
    symbol: "R$",
  }
}

var initial_props = {
  getString: getString,
  getImage: getImage,
  prefs: prefs,
  project: project,
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" render={() => <AboutUsPage {...initial_props} />} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/products/strategies" render={() => <StrategiesPage {...initial_props} />} />
      <Route path="/products/wallets" render={() => <WalletsPage {...initial_props} />} />
      <Route path="/products/phitrader" render={() => <PhiTraderPage {...initial_props} />} />
      <Route path="/" render={() => <PresentationPage {...initial_props} />} />
    </Switch>
    <Footer theme="white" {...initial_props} />
  </Router>,
  document.getElementById("root")
);
