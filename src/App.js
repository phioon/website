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

const App = () => {
  const [prefsData, setPrefsData] = React.useState({
    prefs: {
      langId: "ptBR",
      currency: {
        code: "BRL",
        symbol: "R$",
      }
    }
  })

  const setLangId = (newLangId) => {
    let langList = getLangList()

    if (prefsData.prefs.langId !== newLangId && langList.includes(newLangId))
      prefsData.prefs.langId = newLangId

    setPrefsData(prefsData)
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
}

export default App;