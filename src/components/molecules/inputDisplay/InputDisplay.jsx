import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DisplayBox = styled.div`
  background-color: #007bff;
`;

const DisplayText = styled.h1`
  color: white;
`;

const InputDisplay = props => {
  const { num } = props;

  return (
    <DisplayBox>
      <DisplayText>{num}</DisplayText>
    </DisplayBox>
  );
};

InputDisplay.propTypes = {
  num: PropTypes.number.isRequired,
};

export default InputDisplay;
