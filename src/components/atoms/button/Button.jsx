import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Button as BootstrapButton } from 'react-bootstrap';

const ButtonBox = styled.div`
  margin: 5px 5px 5px 5px;
`;

const Button = props => {
  const { buttonName, variant } = props;

  const handleClick = () => {
    props.onClick(props.buttonName);
  };

  return (
    <ButtonBox>
      <BootstrapButton
        buttonName={buttonName}
        onClick={handleClick}
        block
        variant={variant}
      >
        {buttonName}
      </BootstrapButton>
    </ButtonBox>
  );
};

Button.propTypes = {
  buttonName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Button;
