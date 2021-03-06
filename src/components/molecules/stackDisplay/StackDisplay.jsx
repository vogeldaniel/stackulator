import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StackBox from '../../atoms/stackBox/StackBox';

const StackDisplay = props => {
  const { memory } = props;

  return (
    <>
      {memory.map((item, index) => (
        <StackBox value={item} key={`${item}-${index}`} />
      ))}
      <BlankSpace />
    </>
  );
};

const BlankSpace = styled.div`
  height: 50vh;
`;

StackDisplay.propTypes = {
  memory: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default StackDisplay;
