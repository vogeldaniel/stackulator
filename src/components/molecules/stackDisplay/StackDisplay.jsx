import React from 'react';
import PropTypes from 'prop-types';

import StackBox from '../../atoms/stackBox/StackBox';

const StackDisplay = props => {
  const { memory } = props;

  return (
    <>
      {memory.map(item => (
        <StackBox value={item} />
      ))}
    </>
  );
};

StackDisplay.propTypes = {
  memory: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default StackDisplay;
