import React from "react";

import macbookImage from "../../assets/img/Exemplo/laptop-basics-pt.png";

import PropTypes from "prop-types";

import {
 Container,
 Row,
 Col
} from "reactstrap";
///
class Introduction extends React.Component {
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
        <div className="section section-basic" id="introduction">
          <Container>
            <Row>
              <Col md="5">
                <h2 >{getString(langId, compId, "titleaboutus")}</h2>
                <h3 >{getString(langId, compId, "aboutus1")}</h3>
                <h4 >{getString(langId, compId, "aboutus2")}</h4>
                <h5 >{getString(langId, compId, "aboutus3")}</h5>
                <h6 >{getString(langId, compId, "aboutus4")}</h6>
                <h6 >{getString(langId, compId, "aboutus6")}</h6>
              </Col>
              <Col className="ml-auto mr-auto" md="7">
                <div>
                  <img
                    src={macbookImage}
                    alt="macbook"
                    
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

export default Introduction;

Introduction.propTypes = {
  getString: PropTypes.func.isRequired,
  prefs: PropTypes.object.isRequired
}