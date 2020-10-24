import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
// core components
import Footer from "components/Footer/Footer.js";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import StrategiesPage from "views/StrategiesPage/StrategiesPage.js";
import WalletsPage from "views/WalletsPage/WalletsPage.js";
import PhiTraderPage from "views/PhiTraderPage/PhiTraderPage.js";

import { getString, getLangList } from "core/lang";
import { getImage } from "core/images";
import { project } from "core/projectData";

var hist = createBrowserHistory();

var browserLanguage = window.navigator.userLanguage || window.navigator.language || window.navigator.languages[0];
browserLanguage = String(browserLanguage).replace(/[^a-zA-Z0-9]+/g, "")
browserLanguage = browserLanguage && browserLanguage.startsWith("pt") ? "ptBR" : "enUS"

export default function App() {

  const [prefsData, setPrefsData] = React.useState({
    prefs: {
      langId: browserLanguage,
      currency: {
        code: "BRL",
        symbol: "R$",
      }
    }
  })

  const setLangId = (newLangId) => {
    let langList = getLangList()

    if (langList.includes(newLangId) && prefsData.prefs.langId !== newLangId) {
      let newPrefs = { ...prefsData }
      newPrefs.prefs.langId = newLangId
      setPrefsData(newPrefs)
    }
  }

  const projectData = { project: project }
  const functions = {
    getString: getString,
    setLangId: setLangId,
    getImage: getImage,
  }

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/about-us" render={() => <AboutUsPage {...prefsData} {...projectData} {...functions} />} />
        <Route path="/contact-us" render={() => <ContactUsPage {...prefsData} {...projectData} {...functions} />} />
        <Route path="/pricing" render={() => <PricingPage {...prefsData} {...projectData} {...functions} />} />
        <Route path="/products/strategies" render={() => <StrategiesPage {...prefsData} {...projectData} {...functions} />} />
        <Route path="/products/wallets" render={() => <WalletsPage {...prefsData} {...projectData} {...functions} />} />
        <Route path="/products/phitrader" render={() => <PhiTraderPage {...prefsData} {...projectData} {...functions} />} />
        <Route path="/" render={() => <PresentationPage {...prefsData} {...projectData} {...functions} />} />
      </Switch>
      <Footer theme="white" {...prefsData} {...projectData} {...functions} />
    </Router>
  )
};