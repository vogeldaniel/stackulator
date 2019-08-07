import React from 'react';
import Keypad from './Keypad.js';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Keypad />, div);
  ReactDOM.unmountComponentAtNode(div);
});
