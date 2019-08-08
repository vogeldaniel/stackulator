import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Keypad from '../../molecules/keypad/Keypad';
import Display from '../../molecules/display/Display';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: 0,
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
    const { inputNum } = this.state;
    return (
      <div>
        <Display num={inputNum} />
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
