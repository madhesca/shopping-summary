import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col, Container } from "react-bootstrap";

export class ItemDetails extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <div>
        <Button
          className="item=details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {!this.state.open ? "  +" : "  -"}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <img
              width={100}
              height={100}
              alt="thumbnail"
              src="https://i5.walmartimages.com/asr/2ab43621-0110-48a0-9fd5-6db48d5ee8e4_1.ff8d1590e386fcecebeb781fd92010b1.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
            />

            <Media.Body>
              <p>This is a cool chair</p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong>{`$${this.props.price}`}</strong>
                  <br />
                  <strong className="price-strike">{`$${this.props.price}`}</strong>
                </Col>
                <Col md={6}>Qty: 1</Col>
              </Row>
            </Media.Body>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
