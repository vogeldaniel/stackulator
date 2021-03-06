import React from 'react';
import PropTypes from 'prop-types';

import {
  OverlayTrigger, Popover, Container, Row, Col,
} from 'react-bootstrap';
import Button from '../../atoms/button/Button';

const stackOperands = [
  {
    name: 'push',
    tooltip: 'Places an item on the top of the stack.',
  },
  {
    name: 'pop',
    tooltip:
      'Removes the top item and returns it. In Stackulator, the return is placed in the keyboard input.',
  },
  {
    name: 'peek',
    tooltip: 'Returns the item at the top of the stack. In Stackulator, the return is placed in the keyboard input.',
  },
  {
    name: 'isEmpty',
    tooltip: 'True when the stack is empty, otherwise false.',
  },
];

const mathOperands = [
  {
    name: '+',
    tooltip: 'Adds the first two items on the stack, and pushes the result back to the top.',
  },
  {
    name: '-',
    tooltip:
      'Subtracts the second item on the stack from the first, and pushes the result back to the top.',
  },
  {
    name: '*',
    tooltip: 'Multiplies the first two items on the stack, and pushes the result back to the top.',
  },
  {
    name: '/',
    tooltip:
      'Divides the first item on the stack by the second, and pushes the result back to the top.',
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
    <Col key={operandInfo.name}>
      <OverlayTrigger
        trigger={['hover', 'active']}
        delay={{ show: 600, hide: 400 }}
        overlay={tooltip}
      >
        <span>
          <Button
            buttonName={operandInfo.name}
            onClick={clickHandler}
            variant="warning"
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
      <Row>{stackOperands.map(operation => createButton(operation, clickHandler, props))}</Row>
      <Row>{mathOperands.map(operation => createButton(operation, clickHandler, props))}</Row>
    </Container>
  );
};

StackOperations.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default StackOperations;
