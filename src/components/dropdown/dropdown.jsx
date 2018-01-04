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
      restOfItems: []
    };
    this.toogle = this.toogle.bind(this);
    this.onClickOption = this.onClickOption.bind(this);
  }

  onClickOption(item, event) {
  	event.preventDefault();

    /*this.state.restOfItems.push(item)

    const index = this.state.items.findIndex(function(ele){
      return ele.value === item.value;
    });*/

    this.setState({
      open: !this.state.open,
      label: item.label,
      //items: this.state.items.filter(e => e.value !== item.value)
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
          {this.state.label}
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
};

export default DropdownComponent;
