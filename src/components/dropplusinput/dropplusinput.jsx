import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import DropDownComponent from '../dropdown/dropdown.jsx';
import './dropplusinput.css';

const DropPlusInputComponent = (props) => {
  return (
  	<div style={{width:350}}>
  		<div className="container-drop" style={{width:150}}>
  			<DropDownComponent items={props.items} name="typesTel" getValue={props.getSelectedItem}></DropDownComponent>
  		</div>
  		<div className="container-input">
  			<input className="input" type="text"></input>
  		</div>
  	</div>
  );
}

DropPlusInputComponent.propTypes = {
  items: PropTypes.array,
  getSelectedItem: PropTypes.func,
}

export default DropPlusInputComponent;
