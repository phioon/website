import React from "react";
import { Redirect } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import strategiesStyle from "assets/jss/material-kit-pro-react/views/presentationSections/strategiesStyle.js";

import macbookImage from "assets/img/phioon_app/strategies/laptop-basics.png";
import cardStrategy1 from "assets/img/phioon_app/strategies/card-strategy-1.png";
import cardStrategy2 from "assets/img/phioon_app/strategies/card-strategy-2.png";
import actionsImage from "assets/img/phioon_app/strategies/actions.png";

const useStyles = makeStyles(strategiesStyle);

export default function SectionStrategies(props) {
  const compId = "sectionstrategies"

  const [goToStrategiesPage, setGoToStrategiesPage] = React.useState(undefined)
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} >
            <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h2>
            <h3 className={classes.description}>
              {props.getString(props.prefs.langId, compId, "label_desc")}
            </h3>
            {goToStrategiesPage && <Redirect to="/products/strategies" />}
            <Button color={"success"} onClick={() => setGoToStrategiesPage(true)} link>
              <h5>
                {props.getString(props.prefs.langId, compId, "btn_details")}
                {" "}
                <i className="material-icons">call_made</i>
              </h5>
            </Button>
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
