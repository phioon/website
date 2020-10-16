import React from "react";
import { Redirect } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js";

const useStyles = makeStyles(cardsStyle);

export default function SectionWallets(props) {
  const compId = "sectionwallets"

  const [goToWalletsPage, setGoToWalletsPage] = React.useState(undefined)
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={7} sm={7}>
            <div className={classes.imageContainer}>
              <img src={props.getImage(props.prefs.langId, "wallets_cards1")} alt="Wallets" />
            </div>
          </GridItem>
          <GridItem md={4} sm={5} className={classes.mlAuto}>
            <div className={classes.sectionDescription}>
              <h2 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h2>
              <h3 className={classes.description}>
                {props.getString(props.prefs.langId, compId, "label_desc")}
              </h3>
              {goToWalletsPage && <Redirect to="/products/wallets" />}
              <Button color={"success"} onClick={() => setGoToWalletsPage(true)} link>
                <h5 className={classes.whiteColor}>
                  {props.getString(props.prefs.langId, compId, "btn_details")}
                  {" "}
                  <i className="material-icons">call_made</i>
                </h5>
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
