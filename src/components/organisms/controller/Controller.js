import React from "react";
import PropTypes from "prop-types";
import KeyboardEventHandler from "react-keyboard-event-handler";

import Keypad from "../../molecules/keypad/Keypad.js";
import Display from "../../molecules/display/Display.js";

class StackulatorControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: 0
    };
  }

  inputNum = num => {
    this.setState({
      inputNum: this.state.inputNum * 10 + parseInt(num)
    });
  };

  render = () => {
    return (
      <div>
        <Display num={this.state.inputNum} />
        <Keypad clickHandler={this.clickHandler} />
        <KeyboardEventHandler
          handleKeys={["numeric"]}
          onKeyEvent={(key, e) => this.inputNum(key)}
        />
      </div>
    );
  };

  clickHandler = buttonName => {
    this.setState({
      inputNum: this.state.inputNum * 10 + parseInt(buttonName)
    });
  };
}

export default StackulatorControl;
