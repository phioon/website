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

const useStyles = makeStyles(strategiesStyle);

export default function SectionStrategies(props) {
  const compId = "presentationstrategies"

  const [redirectTo, setRedirectTo] = React.useState(undefined)
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
            {redirectTo && <Redirect to={redirectTo} />}
            <Button color={"success"} onClick={() => setRedirectTo("/products/strategies")} link>
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
                src={props.getImage(props.prefs.langId, "strategies_macbook")}
                alt="Strategies"
                className={classes.componentsMacbook}
              />
              <img
                src={props.getImage(props.prefs.langId, "strategies_card1")}
                alt="Strategies"
                className={classes.cardStrategy1}
              />
              <img
                src={props.getImage(props.prefs.langId, "strategies_card2")}
                alt="Strategies"
                className={classes.cardStrategy2}
              />
              <img
                src={props.getImage(props.prefs.langId, "strategies_actions")}
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
