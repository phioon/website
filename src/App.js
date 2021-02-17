import React from "react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
// core components
import Routes from "./Routes";
import Footer from "components/Footer/Footer.js";

import { getTranslation, localeList } from "core/locales";
import { getImage } from "core/images";
import { project } from "core/projectData";

const hist = createBrowserHistory();

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
    let locales = localeList()

    if (locales.includes(newLangId) && prefsData.prefs.langId !== newLangId) {
      let newPrefs = { ...prefsData }
      newPrefs.prefs.langId = newLangId
      setPrefsData(newPrefs)
    }
  }

  const projectData = { project: project }
  const functions = {
    getString: getTranslation,
    getImage: getImage,
    setLangId: setLangId,
  }

  return (
    <Router history={hist}>
      <Routes {...prefsData} {...projectData} {...functions} />
      <Footer {...prefsData} {...projectData} {...functions} theme="white" />
    </Router>
  )
};