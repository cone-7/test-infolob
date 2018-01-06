import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

class DropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      label: props.label,
      items: props.items,
    };
    this.toogle = this.toogle.bind(this);
    this.onClickOption = this.onClickOption.bind(this);
  }

  onClickOption(item, event) {
  	event.preventDefault();

    this.setState({
      open: !this.state.open,
      label: item.label,
    });

    this.props.getValue(item);

  }

  toogle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="Dropdown" name={this.props.name}>
        <button
          className="Dropdown_Btn Dropdown_Dropbtn_Initial"
          onClick={this.toogle}
        >
          {this.props.defaultDropDown ? this.props.defaultDropDown : this.state.label}
        </button>
        { this.state.open &&
          <div className="Dropdown_Content">
              {this.state.items.map(item => (
                <a
                  key={item.label}
                  className="Dropdown_Option"
                  onClick={(event) => { this.onClickOption(item, event); }}
                  href="#"
                  value={item.value}
                  label={item.label}
                >
                  {item.label}
                </a>
              ))}
          </div>
        }
      </div>
    );
  }
}

DropdownComponent.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
  name: PropTypes.string.isRequired,
  getValue: PropTypes.func,
  defaultDropDown: PropTypes.string,
};

export default DropdownComponent;
