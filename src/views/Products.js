
import React from "react";


import NavbarScroll from "components/Navbars/NavbarScroll.jsx";
import Footer from "components/Footers/Footer.jsx";

import Phitrader from "./IndexSections/Phitrader.jsx";
import Strategies from "./IndexSections/Strategies.jsx";

import { getLangList, getString } from "../core/lang";

class Products extends React.Component {
  constructor() {
    super()

    this.state = {
      prefs: {
        langId: "ptBR"
      }
    }

    this.setPrefs = this.setPrefs.bind(this)
    this.setLangId = this.setLangId.bind(this)
  }

  componentDidMount() {
    document.body.classList.add("products-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;

    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );

    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href) !== null
    ) {
      document.getElementById(href).scrollIntoView();
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("products-page");
  }

  // Set Prefs
  setPrefs(obj_prefs) {
    // prefs must be an object with at least one key of user's preferences. {langId: <value>}
    let { prefs } = this.state

    if (obj_prefs) {
      for (var [k, v] of Object.entries(obj_prefs))
        if (prefs[k])
          prefs[k] = v

      this.setState({ prefs })
    }
  }

 // Set new language. Only used by NavBar (NavBar uses this.setPrefs())
 setLangId(newLangId) {
  let prefs = this.state.prefs
  let langList = getLangList()

  if (prefs.langId !== newLangId && langList.includes(newLangId))
    prefs.langId = newLangId

  this.setState({ prefs })
}
  render() {
    let { prefs } = this.state
    return (
      <>
        <NavbarScroll {...this.props}
            getString={getString}
            prefs={prefs}
            setLangId={this.setLangId}
        />        
        <div className="wrapper" ref="wrapper">
          <br></br>
          <br></br>
          <br></br>
          <div className="main">
            <Strategies {...this.props}
            getString={getString}
            prefs={prefs}
            setLangId={this.setLangId}/>
          <div className="main" />
            <Phitrader {...this.props}
            getString={getString}
            prefs={prefs}
            setLangId={this.setLangId}/>
          <div className="main" />
            <br></br>
          </div>
          <div className="main" />
            <Footer {...this.props}
            getString={getString}
            prefs={prefs}
            setLangId={this.setLangId}/>
          <div className="main" />
          
        </div>
      </>
    );
  }
}

export default Products;
