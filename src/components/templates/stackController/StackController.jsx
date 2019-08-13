import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import StackDisplay from '../../molecules/stackDisplay/StackDisplay';

import InputArea from '../../organisms/inputArea/InputArea';

import Stack from '../../../utils/Stack/Stack';

import {
  addition, subtraction, multiplication, division,
} from '../../../utils/arithmetic';

class StackController extends React.Component {
  static STACK_OPERATIONS = ['push', 'pop', 'peek', 'isEmpty'];

  static MATH_OPERATIONS = ['+', '-', '*', '/'];

  static CALC_OPERATIONS = ['C', '+/-'];

  static couldNotBeANumber = input => isNaN(parseInt(input));

  static isStackOperator = input => StackController.STACK_OPERATIONS.includes(input);

  static isMathOperator = input => StackController.MATH_OPERATIONS.includes(input);

  static isCalcOperator = input => StackController.CALC_OPERATIONS.includes(input);

  constructor(props) {
    super(props);
    this.state = {
      inputNum: 0,
      stack: new Stack(),
    };
  }

  input = input => {
    if (StackController.couldNotBeANumber(input)) {
      if (StackController.isStackOperator(input)) {
        this.handleStackInput(input);
      } else if (StackController.isMathOperator(input)) {
        this.handleMathInput(input);
      } else if (StackController.isCalcOperator(input)) {
        this.handleCalcInput(input);
      }
    } else {
      this.handleNumInput(input);
    }
  };

  handleNumInput = input => {
    const { inputNum } = this.state;

    this.setState({
      inputNum: inputNum * 10 + parseInt(input),
    });
  };

  handleStackInput(input) {
    const { inputNum, stack } = this.state;

    switch (input) {
      case 'push':
        stack.push(inputNum);
        this.setState({ inputNum: 0 });
        break;
      case 'pop':
        try {
          this.setState({ inputNum: stack.pop() });
        } catch (e) {
          window.alert(e);
        }
        break;
      case 'isEmpty':
        window.alert(stack.isEmpty());
        break;
      default:
        break;
    }
  }

  handleMathInput(input) {
    const { stack } = this.state;

    switch (input) {
      case '+':
        stack.operate(addition);
        break;
      case '-':
        stack.operate(subtraction);
        break;
      case '*':
        stack.operate(multiplication);
        break;
      case '/':
        stack.operate(division);
        break;
      default:
        break;
    }

    this.forceUpdate();
  }

  handleCalcInput(input) {
    const { inputNum } = this.state;

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
  }

  render = () => {
    const { inputNum, stack } = this.state;
    return (
      <div>
        <StackDisplay memory={stack.memory} />
        <KeyboardEventHandler
          handleKeys={['numeric']}
          onKeyEvent={key => this.input(key)}
        />
        <div>
          <InputArea
            inputDisplay={inputNum}
            clickHandler={this.input}
          />
        </div>
      </div>
    );
  };
}

export default StackController;
