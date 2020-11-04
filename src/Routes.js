import React from "react";
import { Route, Switch } from "react-router";
// core components
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import StrategiesPage from "views/StrategiesPage/StrategiesPage.js";
import WalletsPage from "views/WalletsPage/WalletsPage.js";
import PhiTraderPage from "views/PhiTraderPage/PhiTraderPage.js";

export default function Routes(props) {
  return (
    <Switch>
      <Route path="/about-us" render={() => <AboutUsPage {...props} />} />
      <Route path="/contact-us" render={() => <ContactUsPage {...props} />} />
      <Route path="/pricing" render={() => <PricingPage {...props} />} />
      <Route path="/products/strategies" render={() => <StrategiesPage {...props} />} />
      <Route path="/products/wallets" render={() => <WalletsPage {...props} />} />
      <Route path="/products/phitrader" render={() => <PhiTraderPage {...props} />} />
      <Route path="/" render={() => <PresentationPage {...props} />} />
    </Switch>
  )
}