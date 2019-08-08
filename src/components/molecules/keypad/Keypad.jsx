import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Button from '../../atoms/button/Button';

class Keypad extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired,
  };

  buttonCol = (num, onClick) => (
    <Col key={num}>
      <Button
        buttonName={num}
        onClick={onClick}
      />
    </Col>
  );

  buttons = () => {
    const { clickHandler } = this.props;
    return (
      <>
        <Row>{[7, 8, 9].map(num => this.buttonCol(num, clickHandler))}</Row>
        <Row>{[4, 5, 6].map(num => this.buttonCol(num, clickHandler))}</Row>
        <Row>{[1, 2, 3].map(num => this.buttonCol(num, clickHandler))}</Row>
        <Row>{['C', 0, '+/-'].map(char => this.buttonCol(char, clickHandler))}</Row>
      </>
    );
  };

  render = () => <Container>{this.buttons()}</Container>;
}

export default Keypad;
