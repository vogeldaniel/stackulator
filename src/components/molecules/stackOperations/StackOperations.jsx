import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup } from 'react-bootstrap';
import Button from '../../atoms/button/Button';

class StackOperations extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired,
  };

  buttons = () => {
    const { clickHandler } = this.props;

    return (
      <ButtonGroup>
        {['push', 'pop', 'peek', 'isEmpty'].map(operation => (
          <Button
            buttonName={operation}
            onClick={clickHandler}
          />
        ))}
      </ButtonGroup>
    );
  };

  render = () => this.buttons();
}

export default StackOperations;
