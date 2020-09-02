import React from "react";

// reactstrap components
import {Container,
Col,
Row
} from "reactstrap";

import PropTypes from "prop-types";

import suggestions from "../../assets/img/Exemplo/suggestions.jpg";

class Presentation extends React.Component {

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
        <div className="section section-basic" id="presentation">
        <Container>
            <Row>
              <Col md="5">
              <h2 >{getString(langId, compId, "titlesuggestions")}</h2>
                <h3 >{getString(langId, compId, "suggestions1")}</h3>
                <h4 >{getString(langId, compId, "suggestions2")}</h4>
                <h5 >{getString(langId, compId, "suggestions3")}</h5>
              </Col>              
              <Col className="ml-auto mr-auto" md="5">
                <div>
                  <img
                    src={suggestions}
                    alt="suggestions"
                    
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

export default Presentation;

Presentation.propTypes = {
  getString: PropTypes.func.isRequired,
  prefs: PropTypes.object.isRequired
}