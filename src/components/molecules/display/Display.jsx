import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  static propTypes = {
    num: PropTypes.number.isRequired,
  };

  render = () => (
    <div>
      <p>{this.props.num}</p>
    </div>
  );
}

export default Display;
