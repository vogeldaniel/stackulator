import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';

const StackBox = props => {
  const { value } = props;

  return <Card body>{value}</Card>;
};

StackBox.propTypes = {
  value: PropTypes.number.isRequired,
};

export default StackBox;
