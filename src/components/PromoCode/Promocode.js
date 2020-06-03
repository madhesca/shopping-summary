import React, { Component } from "react";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";
import {
  Button,
  Collapse,
  Form,
  Row,
  Col,
  FormGroup,
  FormControl,
} from "react-bootstrap";

export class Promocode extends Component {
  state = {
    open: false,
  };

  handleChange = (e) => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "Apply " : "Hide "}
          promo code
          {this.state.open === false ? "  +" : "  -"}
        </Button>

        <Collapse in={this.state.open}>
          <Row className="show-grid">
            <Col md={12}>
              <Form>
                <FormGroup controlId="formInlineName">
                  <label>Promocode</label>
                  <FormControl
                    type="text"
                    placeholder="Enter Promo Code"
                    value={this.props.promoCode}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button
                  className="btn-round"
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                >
                  Apply
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value,
});

export default connect(mapStateToProps, { handleChange })(Promocode);
