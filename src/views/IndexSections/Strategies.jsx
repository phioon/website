import React from "react";

// reactstrap components
import {Container,
Col,
Row
} from "reactstrap";

import PropTypes from "prop-types";

import strategies from "../../assets/img/Exemplo/suggestions.jpg";

class Strategies extends React.Component {

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

  render() {
    let { getString } = this.props
    let {langId, compId} = this.state

    return (
      <>
        <div className="section section-basic" id="strategies">
        <Container>
            <Row>
              <Col md="5">
              <h2 >{getString(langId, compId, "titlestrategies")}</h2>
                <h3 >{getString(langId, compId, "strategies1")}</h3>
                <h4 >{getString(langId, compId, "strategies2")}</h4>
                <h5 >{getString(langId, compId, "strategies3")}</h5>
              </Col>              
              <Col className="ml-auto mr-auto" md="5">
                <div>
                  <img
                    src={strategies}
                    alt="strategies"
                    
                  /> 
                </div>   
              </Col>         
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Strategies;

Strategies.propTypes = {
  getString: PropTypes.func.isRequired,
  prefs: PropTypes.object.isRequired
}