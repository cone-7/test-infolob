import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import DropDownComponent from '../dropdown/dropdown.jsx';
import InputComponent from '../input/input.jsx';
import './dropplusinput.css';

const DropPlusInputComponent = (props) => {
  return (
  	<div style={{width:350}}>
  		<div className="container-drop" style={{width:150}}>
  			<DropDownComponent defaultDropDown={props.defaultDropDown} items={props.items} name="typesTel" getValue={props.getSelectedItem}></DropDownComponent>
  		</div>
  		<div className="container-input">
        <InputComponent defaultInput={props.defaultInput} name="nameinput" onBlur={props.onBlurInput}></InputComponent>
  		</div>
  	</div>
  );
}

DropPlusInputComponent.propTypes = {
  items: PropTypes.array,
  getSelectedItem: PropTypes.func,
  onBlurInput: PropTypes.func,
  defaultInput: PropTypes.string,
  defaultDropDown: PropTypes.string,
}

export default DropPlusInputComponent;
