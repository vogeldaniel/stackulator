import React from "react";
import PropTypes from "prop-types";
import KeyboardEventHandler from "react-keyboard-event-handler";

import Keypad from "../../molecules/keypad/Keypad.js";
import Display from "../../molecules/display/Display.js";

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNum: 0
    };
  }

  input = input => {
    const asNum = parseInt(input);

    if (isNaN(asNum)) {
      switch (input) {
        case "C":
          this.setState({ inputNum: 0 });
          break;
        case "+/-":
          this.setState({ inputNum: this.state.inputNum * (-1) })
          break;
      }
    } else {
      this.setState({
        inputNum: this.state.inputNum * 10 + parseInt(input)
      });
    }
  };

  render = () => {
    return (
      <div>
        <Display num={this.state.inputNum} />
        <Keypad clickHandler={this.input} />
        <KeyboardEventHandler
          handleKeys={["numeric"]}
          onKeyEvent={(key, e) => this.input(key)}
        />
      </div>
    );
  };
}

export default Controller;
