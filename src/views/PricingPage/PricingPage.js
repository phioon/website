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
import SectionSubscriptions from "views/PricingPage/Sections/SectionSubscriptions.js";
import SectionFAQ from "views/PricingPage/Sections/SectionFAQ.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function PricingPage(props) {
  const compId = "pricingpage"

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brandIconId="original"
        brandLogoId="white"
        links={<HeaderLinks {...props} dropdownHoverColor="info" />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 280,
          color: "primary"
        }}
      />

      <Parallax image={props.project.img.bg.app_clean.src} filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h1>
              <h4>
                {props.getString(props.prefs.langId, compId, "label_desc")}
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionSubscriptions {...props} />
          <hr />
          <SectionFAQ {...props} />
        </div>
      </div>
      <br />
    </div>
  );
}
