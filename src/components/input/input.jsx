import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './input.css';

class InputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(event) {
  	event.preventDefault();

    this.setState({
      value: event.target.value,
    });
    this.props.onBlur(this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text" name={this.props.name} onChange={this.onBlur} value={this.state.value ? this.state.value : this.props.defaultInput} onBlur={this.onBlur} />
      </div>
    );
  }
}

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  defaultInput: PropTypes.string,
};

export default InputComponent;
