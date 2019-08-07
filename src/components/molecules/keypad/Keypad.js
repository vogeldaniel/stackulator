import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

import Button from "../../atoms/button/Button.js";

class Keypad extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired
  };

  buttonCol = (num, onClick) => {
    return (
      <Col key={num}>
        <Button buttonName={num} onClick={onClick} />
      </Col>
    );
  };

  ninePad = () => {
    return (
      <>
        <Row>
          {[7, 8, 9].map(num => this.buttonCol(num, this.props.clickHandler))}
        </Row>
        <Row>
          {[4, 5, 6].map(num => this.buttonCol(num, this.props.clickHandler))}
        </Row>
        <Row>
          {[1, 2, 3].map(num => this.buttonCol(num, this.props.clickHandler))}
        </Row>
      </>
    );
  };

  bottomRow = () => {
    return <Row>{[0].map(char => this.buttonCol(char))}</Row>;
  };

  render = () => {
    return (
      <Container>
        {this.ninePad()}
        {this.bottomRow()}
      </Container>
    );
  };
}

export default Keypad;
