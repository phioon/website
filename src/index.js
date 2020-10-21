import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";
// core components
import Footer from "components/Footer/Footer.js";
// pages for this product
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";

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
  project: { ...project },
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" render={() => <AboutUsPage {...initial_props} />} />
      <Route path="/contact-us" render={() => <ContactUsPage {...initial_props} />} />
      <Route path="/pricing" render={() => <PricingPage {...initial_props} />} />
      <Route path="/products/strategies" render={() => <StrategiesPage {...initial_props} />} />
      <Route path="/products/wallets" render={() => <WalletsPage {...initial_props} />} />
      <Route path="/products/phitrader" render={() => <PhiTraderPage {...initial_props} />} />
      <Route path="/" render={() => <PresentationPage {...initial_props} />} />
    </Switch>
    <Footer theme="white" {...initial_props} />
  </Router>,
  document.getElementById("root")
);
