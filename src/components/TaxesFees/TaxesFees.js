import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}> Est. taxes & fees (based on 545)</Col>
        <Col md={6}> {`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

export default TaxesFees;
