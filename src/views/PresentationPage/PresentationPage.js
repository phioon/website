/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionStrategies from "views/PresentationPage/Sections/SectionStrategies.js";
import SectionWallets from "views/PresentationPage/Sections/SectionWallets.js";
import SectionPhiTrader from "views/PresentationPage/Sections/SectionPhiTrader.js";
import SectionFooter from "views/PresentationPage/Sections/SectionFooter.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function PresentationPage(props) {
  const compId = "presentationpage"

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div>
      <Header
        brandIconId="white"
        brandLogoId="white"
        links={<HeaderLinks {...props} dropdownHoverColor="primary" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 280,
          color: "primary"
        }}
      />
      <Parallax
        filter={"secondary"}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <img
                  alt={props.project.img.branding.logo.white.alt}
                  width={window.innerWidth < 567 ?
                    props.project.img.branding.logo.white.width * 0.15 :
                    props.project.img.branding.logo.white.width * 0.23
                  }
                  height={window.innerWidth < 567 ?
                    props.project.img.branding.logo.white.height * 0.15 :
                    props.project.img.branding.logo.white.height * 0.23
                  }
                  src={props.project.img.branding.logo.white.src}
                />
                <h4 className={classes.slogan}>
                  {props.getString(props.prefs.langId, compId, "label_slogan")}
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription {...props} />
        <br />
        <SectionStrategies {...props} />
        <SectionWallets {...props} />
        <SectionPhiTrader {...props} />
      </div>
      <SectionFooter {...props} />
    </div>
  );
}
