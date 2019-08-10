import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonGroup, OverlayTrigger, Popover, Container, Row, Col,
} from 'react-bootstrap';
import styled from 'styled-components';
import Button from '../../atoms/button/Button';

const stackOperands = [
  {
    name: 'push',
    tooltip: 'places an item on the top of the stack',
  },
  {
    name: 'pop',
    tooltip:
      'removes the top item and returns it -- here, the return is placed in the keyboard input',
  },
  {
    name: 'peek',
    tooltip: 'shows the item on the top of the stack',
  },
  {
    name: 'isEmpty',
    tooltip: 'true when the stack is empty, otherwise false',
  },
];

const mathOperands = [
  {
    name: '+',
    tooltip: 'adds the first two items on the stack, and pushes the result back to the top',
  },
  {
    name: '-',
    tooltip:
      'subtracts the second item on the stack from the first, and pushes the result back to the top',
  },
  {
    name: '*',
    tooltip: 'multiplies the first two items on the stack, and pushes the result back to the top',
  },
  {
    name: '/',
    tooltip:
      'divides the first item on the stack by the second, and pushes the result back to the top',
  },
];

const createButton = (operandInfo, clickHandler, props) => {
  const tooltip = (
    <Popover
      {...props}
      id={`${operandInfo.name}-popover`}
    >
      <Popover.Title>{operandInfo.name}</Popover.Title>
      <Popover.Content>{operandInfo.tooltip}</Popover.Content>
    </Popover>
  );

  return (
    <Col>
      <OverlayTrigger
        key={operandInfo.name}
        placement="bottom"
        trigger="hover"
        delay={{ show: 250, hide: 400 }}
        overlay={tooltip}
      >
        <span>
          <Button
            buttonName={operandInfo.name}
            onClick={clickHandler}
          />
        </span>
      </OverlayTrigger>
    </Col>
  );
};

const StackOperations = props => {
  const { clickHandler } = props;

  return (
    <Container>
      <Row>
        {stackOperands.map(operation => createButton(operation, clickHandler, props))}
      </Row>
      <Row>
        {mathOperands.map(operation => createButton(operation, clickHandler, props))}
      </Row>
    </Container>
  );
};

StackOperations.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default StackOperations;
