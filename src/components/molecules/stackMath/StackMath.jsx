import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup } from 'react-bootstrap';
import Button from '../../atoms/button/Button';

const operands = [
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

const StackMath = props => {
  const { clickHandler } = props;

  return (
    <ButtonGroup>
      {['+', '-', '*', '/'].map(operation => (
        <Button
          buttonName={operation}
          onClick={clickHandler}
        />
      ))}
    </ButtonGroup>
  );
};

StackMath.propTypes = { clickHandler: PropTypes.func.isRequired };

export default StackMath;
