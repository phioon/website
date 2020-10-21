import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionSubscriptions(props) {
  const compId = "pricingsubscriptions"

  const classes = useStyles();
  const [termIndex, setTermIndex] = React.useState(0);
  const [tooltip, setTooltip] = React.useState({ isOpen: undefined, target: undefined, message: "" })

  const handleTooltip = (target, message) => {
    setTooltip({
      target: target,
      message: message
    })
  }

  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem
          md={6}
          sm={6}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <NavPills
            alignCenter
            color="info"
            onChange={setTermIndex}
            active={termIndex}
            tabs={[
              { tabButton: props.getString(props.prefs.langId, compId, "label_tab_monthly") },
              { tabButton: props.getString(props.prefs.langId, compId, "label_tab_yearly") }
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6 className={classNames(classes.cardCategory, classes.textInfo)}>
                {props.getString(props.prefs.langId, compId, "label_subscription1_name")}
              </h6>
              <h1 className={classes.cardTitle}>
                <small>{props.getString(props.prefs.langId, compId, "label_currency_code")}</small>
                0
                {" "}
                <small>/{props.getString(props.prefs.langId, compId, "label_month")}</small>
              </h1>
              <ul>
                {/* <li>
                  <b>1</b> {props.getString(props.prefs.langId, compId, "label_stockExchange")}
                </li> */}
                <li>
                  <b>2</b> {props.getString(props.prefs.langId, compId, "label_wallets")}
                </li>
                <li>
                  {props.getString(props.prefs.langId, compId, "label_staticPanels")}
                  <Button
                    size="sm"
                    justIcon
                    round
                    link
                    onClick={e => handleTooltip(e.currentTarget, props.getString(props.prefs.langId, compId, "label_staticPanels_hint"))}
                  >
                    <span className="material-icons">help_outline</span>
                  </Button>
                </li>
                <li>
                  <Link to="/products/strategies">
                    <b>{props.getString(props.prefs.langId, compId, "label_strategies")}</b>
                  </Link>
                  :
                  {" "}
                  2 {props.getString(props.prefs.langId, compId, "label_runs")}
                  {" "}
                  {props.getString(props.prefs.langId, compId, "label_perDay")}
                </li>
              </ul>
              <Button href={props.project.info.webapp_signUp} color="info" target="_blank" round>
                {props.getString(props.prefs.langId, compId, "btn_getStarted")}
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="info">
            <CardBody pricing>
              <h6 className={classes.cardCategory}>
                {props.getString(props.prefs.langId, compId, "label_subscription2_name")}
              </h6>
              <h1 className={classes.cardTitleWhite}>
                <small>{props.getString(props.prefs.langId, compId, "label_currency_code")}</small>
                {termIndex === 0 ? 49 : 39}
                {" "}
                <small>/{props.getString(props.prefs.langId, compId, "label_month")}</small>
              </h1>
              <ul>
                {/* <li>
                  <b>1</b> {props.getString(props.prefs.langId, compId, "label_stockExchange")}
                </li> */}
                <li>
                  <b>5</b> {props.getString(props.prefs.langId, compId, "label_wallets")}
                </li>
                <li>
                  {props.getString(props.prefs.langId, compId, "label_dashboards")}
                  <Button
                    size="sm"
                    justIcon
                    round
                    link
                    onClick={e => handleTooltip(e.currentTarget, props.getString(props.prefs.langId, compId, "label_dashboards_hint"))}
                  >
                    <span className="material-icons">help_outline</span>
                  </Button>
                </li>
                <li>
                  <Link to="/products/strategies">
                    <b>{props.getString(props.prefs.langId, compId, "label_strategies")}</b>
                  </Link>
                </li>
                <li>
                  <Link to="/products/phitrader">
                    <b>{props.getString(props.prefs.langId, compId, "label_phiTrader")}</b>
                  </Link>
                </li>
              </ul>
              <Button href={props.project.info.webapp_signUp} color="white" target="_blank" round>
                {props.getString(props.prefs.langId, compId, "btn_getStarted")}
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                {props.getString(props.prefs.langId, compId, "label_subscription3_name")}
              </h6>
              <h1 className={classes.cardTitle}>
                <small>{props.getString(props.prefs.langId, compId, "label_currency_code")}</small>
                {termIndex === 0 ? 69 : 54}
                {" "}
                <small>/{props.getString(props.prefs.langId, compId, "label_month")}</small>
              </h1>
              <ul>
                {/* <li>
                  <b>3</b> {props.getString(props.prefs.langId, compId, "label_stockExchanges")}
                </li> */}
                <li>
                  <b>10</b> {props.getString(props.prefs.langId, compId, "label_wallets")}
                </li>
                <li>
                  {props.getString(props.prefs.langId, compId, "label_dashboards")}
                  <Button
                    size="sm"
                    justIcon
                    round
                    link
                    onClick={e => handleTooltip(e.currentTarget, props.getString(props.prefs.langId, compId, "label_dashboards_hint"))}
                  >
                    <span className="material-icons">help_outline</span>
                  </Button>
                </li>
                <li>
                  <Link to="/products/strategies">
                    <b>{props.getString(props.prefs.langId, compId, "label_strategies")}</b>
                  </Link>
                </li>
                <li>
                  <Link to="/products/phitrader">
                    <b>{props.getString(props.prefs.langId, compId, "label_phiTrader")}</b>
                  </Link>
                </li>
              </ul>
              <Button href={props.project.info.webapp_signUp} color="info" target="_blank" round>
                {props.getString(props.prefs.langId, compId, "btn_getStarted")}
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Popover
        classes={{ paper: classes.popover }}
        open={Boolean(tooltip.target)}
        anchorEl={tooltip.target}
        onClose={() => handleTooltip(null, "")}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
      >
        <div className={classes.popoverBody}>
          {tooltip.message}
        </div>
      </Popover>
    </div >
  );
}
