import React from 'react';
import PropTypes from 'prop-types';

const InputDisplay = props => {
  const { num } = props;

  return (
    <div>
      <p>{num}</p>
    </div>
  );
};

InputDisplay.propTypes = {
  num: PropTypes.number.isRequired,
};

export default InputDisplay;
