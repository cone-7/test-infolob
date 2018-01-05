import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
  	event.preventDefault();

    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
        <input type="text" name={this.props.name} value={this.state.value} onChange={() => this.props.onChange()} />
    );
  }
}

InputComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default InputComponent;
