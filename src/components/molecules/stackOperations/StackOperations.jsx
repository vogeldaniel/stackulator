import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import Button from '../../atoms/button/Button';

const operands = [
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
  );
};

const StackOperations = props => {
  const { clickHandler } = props;

  return (
    <ButtonGroup>
      {operands.map(operation => createButton(operation, clickHandler, props))}
    </ButtonGroup>
  );
};

StackOperations.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default StackOperations;
