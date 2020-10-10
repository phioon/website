import React from "react";
import { Link } from "react-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";

import macbookImage from "assets/img/phioon_app/strategies/laptop-basics.png";
import cardStrategy1 from "assets/img/phioon_app/strategies/card-strategy-1.png";
import cardStrategy2 from "assets/img/phioon_app/strategies/card-strategy-2.png";
import actionsImage from "assets/img/phioon_app/strategies/actions.png";

const useStyles = makeStyles(componentsStyle);

export default function SectionStrategies(props) {
  const compId = "sectionstrategies"
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} >
            <h1 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h1>
            <h2 className={classes.description}>
              {props.getString(props.prefs.langId, compId, "label_desc")}
            </h2>
            <h4 className={classes.description}>
              {props.getString(props.prefs.langId, compId, "btn_details")}
              {" "}
              <i class="material-icons md-18">call_made</i>
            </h4>
          </GridItem>
          <GridItem sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src={macbookImage}
                alt="Strategies"
                className={classes.componentsMacbook}
              />
              <img
                src={cardStrategy1}
                alt="Strategies"
                className={classes.cardStrategy1}
              />
              <img
                src={cardStrategy2}
                alt="Strategies"
                className={classes.cardStrategy2}
              />
              <img
                src={actionsImage}
                alt="Strategies"
                className={classes.actionsImage}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div >
  );
}
