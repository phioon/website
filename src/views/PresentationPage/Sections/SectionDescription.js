import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Schedule from "@material-ui/icons/Schedule";
import TouchApp from "@material-ui/icons/TouchApp";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription(props) {
  const compId = "presentationdescription"

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              {props.getString(props.prefs.langId, compId, "label_desc_p1")}
              <br />
              {props.getString(props.prefs.langId, compId, "label_desc_p2")}
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title={props.getString(props.prefs.langId, compId, "label_infoarea1_title")}
                description={props.getString(props.prefs.langId, compId, "label_infoarea1_desc")}
                icon={TouchApp}
                iconColor="warning"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title={props.getString(props.prefs.langId, compId, "label_infoarea2_title")}
                description={props.getString(props.prefs.langId, compId, "label_infoarea2_desc")}
                icon={Schedule}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title={props.getString(props.prefs.langId, compId, "label_infoarea3_title")}
                description={props.getString(props.prefs.langId, compId, "label_infoarea3_desc")}
                icon={PlayCircleOutline}
                iconColor="info"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
