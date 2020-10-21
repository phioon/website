import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import CardMembership from "@material-ui/icons/CardMembership";
import CardGiftCard from "@material-ui/icons/CardGiftcard";
import AttachMoney from "@material-ui/icons/AttachMoney";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

import featuresStyle from "assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionFAQ(props) {
  const compId = "pricingfaq"

  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
        <h3 className={classes.title}>{props.getString(props.prefs.langId, compId, "label_title")}</h3>
      </div>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title={props.getString(props.prefs.langId, compId, "label_q1_title")}
            description={props.getString(props.prefs.langId, compId, "label_q1_desc")}
            icon={CardMembership}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title={props.getString(props.prefs.langId, compId, "label_q2_title")}
            description={props.getString(props.prefs.langId, compId, "label_q2_desc")}
            icon={CardGiftCard}
            iconColor="success"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title={props.getString(props.prefs.langId, compId, "label_q3_title")}
            description={props.getString(props.prefs.langId, compId, "label_q3_desc")}
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title={props.getString(props.prefs.langId, compId, "label_q4_title")}
            description={
              <>
                {props.getString(props.prefs.langId, compId, "label_q4_desc")}
                {" "}
                <a href={"mailto:" + props.getString(props.prefs.langId, "emails", "support")}>
                  {props.getString(props.prefs.langId, compId, "label_contactUs")}
                </a>
              </>
            }
            icon={QuestionAnswer}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
