import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Keypad from '../../molecules/keypad/Keypad';
import InputDisplay from '../../molecules/inputDisplay/InputDisplay';
import StackDisplay from '../../molecules/stackDisplay/StackDisplay';

import Stack from '../../../utils/Stack/Stack';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: 0,
      stack: new Stack(),
    };
  }

  input = input => {
    const asNum = parseInt(input);

    const { inputNum } = this.state;

    if (isNaN(asNum)) {
      switch (input) {
        case 'C':
          this.setState({ inputNum: 0 });
          break;
        case '+/-':
          this.setState({ inputNum: inputNum * -1 });
          break;
        default:
          break;
      }
    } else {
      this.setState({
        inputNum: inputNum * 10 + parseInt(input),
      });
    }
  };

  render = () => {
    const { inputNum, stack } = this.state;
    return (
      <div>
        <StackDisplay memory={stack.memory} />
        <InputDisplay num={inputNum} />
        <Keypad clickHandler={this.input} />
        <KeyboardEventHandler
          handleKeys={['numeric']}
          onKeyEvent={key => this.input(key)}
        />
      </div>
    );
  };
}

export default Controller;
