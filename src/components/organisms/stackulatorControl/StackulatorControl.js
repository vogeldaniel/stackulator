import React from "react";
import PropTypes from "prop-types";

import Keypad from "../../molecules/keypad/Keypad.js";
import Display from "../../molecules/display/Display.js";

class StackulatorControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: 0,
    }
  }

  render = () => {
    return (
      <div>
        <Display num={this.state.inputNum} />
        <Keypad clickHandler={this.clickHandler} />
      </div>
    )
  }

  clickHandler = (buttonName) => {
    this.setState({ inputNum: (this.state.inputNum * 10) + parseInt(buttonName) })
  }
}

export default StackulatorControl;
