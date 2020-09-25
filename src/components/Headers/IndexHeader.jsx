import React from "react";

import PropTypes from "prop-types";
import { Container } from "reactstrap";


class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      compId: this.constructor.name.toLowerCase(),
      langId: props.prefs.langId,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.prefs.langId !== state.langId)
      return { langId: props.prefs.langId }
    return null
  }

  componentDidMount() {
    document.body.classList.add("index-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }
  render() {
    let { getString } = this.props
    let {langId, compId} = this.state

    return (
      <>
        <div className="page-header" id ="indexHeader">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />

          <Container>
            <div className="content-center brand">
              <h3>{getString(langId, compId, "convenience")} - {getString(langId, compId, "efficiency")} - {getString(langId, compId, "control")}</h3>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Index;


Index.propTypes = {
  getString: PropTypes.func.isRequired,
  prefs: PropTypes.object.isRequired
}