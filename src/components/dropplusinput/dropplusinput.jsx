import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import DropDownComponent from '../dropdown/dropdown.jsx';
import './dropplusinput.css';

const typesTel = [
  {
  	"label": "Home",
  	"value": 0
  },
  {
    "label": "Mobile",
    "value": 1
  },
  {
    "label": "Work",
    "value": 2
  },
  {
    "label": "Other",
    "value": 3
  }
  ];

const DropPlusInputComponent = (props) => {
  return (
  	<div style={{width:350}}>
  		<div className="container-drop" style={{width:150}}>
  			<DropDownComponent items={typesTel} name="typesTel"></DropDownComponent>
  		</div>
  		<div className="container-input">
  			<input className="input" type="text"></input>
  		</div>
  	</div>
  );
}

export default DropPlusInputComponent;
