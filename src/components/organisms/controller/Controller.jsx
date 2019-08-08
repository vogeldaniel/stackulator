import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Keypad from '../../molecules/keypad/Keypad';
import InputDisplay from '../../molecules/inputDisplay/InputDisplay';
import StackDisplay from '../../molecules/stackDisplay/StackDisplay';
import StackOperations from '../../molecules/stackOperations/StackOperations';

import Stack from '../../../utils/Stack/Stack';

/*
These functions are declared here so they can be passed down to the stackulator
 which operates with higher-order functions
 */
const addition = (item1, item2) => item1 + item2;

const subtraction = (item1, item2) => item1 - item2;

const multiplication = (item1, item2) => item1 * item2;

const division = (item1, item2) => item1 / item2;

class Controller extends React.Component {
  static STACK_OPERATIONS = ['push', 'pop', 'peek', 'isEmpty'];

  static MATH_OPERATIONS = ['+', '-', '*', '/'];

  static CALC_OPERATIONS = ['C', '+/-'];

  static couldNotBeANumber = input => isNaN(parseInt(input));

  static isStackOperator = input => Controller.STACK_OPERATIONS.includes(input);

  static isMathOperator = input => Controller.MATH_OPERATIONS.includes(input);

  static isCalcOperator = input => Controller.CALC_OPERATIONS.includes(input);

  constructor(props) {
    super(props);
    this.state = {
      inputNum: 0,
      stack: new Stack(),
    };
  }

  input = input => {
    if (Controller.couldNotBeANumber(input)) {
      if (Controller.isStackOperator(input)) {
        this.handleStackInput(input);
      } else if (Controller.isMathOperator(input)) {
        this.handleMathInput(input);
      } else if (Controller.isCalcOperator(input)) {
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
        <InputDisplay num={inputNum} />
        <Keypad clickHandler={this.input} />
        <KeyboardEventHandler
          handleKeys={['numeric']}
          onKeyEvent={key => this.input(key)}
        />
        <StackOperations clickHandler={this.input} />
      </div>
    );
  };
}

export default Controller;
