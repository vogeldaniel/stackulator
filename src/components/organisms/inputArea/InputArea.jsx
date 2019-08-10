import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Keypad from '../../molecules/keypad/Keypad';
import InputDisplay from '../../molecules/inputDisplay/InputDisplay';
import StackOperations from '../../molecules/stackOperations/StackOperations';

class InputArea extends React.Component {
  static propTypes = {
    inputDisplay: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired,
  };

  buttonArea = () => {
    const { clickHandler } = this.props;

    return (
      <>
        <Keypad clickHandler={clickHandler} />
        <StackOperations clickHandler={clickHandler} />
      </>
    );
  };

  render = () => {
    const { inputDisplay } = this.props;

    const InputAreaBox = styled.div`
      background-color: #f8f9fa;
      position: fixed;
      bottom: 0;
      align-items: center;
      width: 100vw;
    `;

    return (
      <InputAreaBox>
        <InputDisplay num={inputDisplay} />
        {this.buttonArea()}
      </InputAreaBox>
    );
  };
}

export default InputArea;
