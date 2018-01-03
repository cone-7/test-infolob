import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// main app

import ButtonComponent from './src/components/button/button.jsx';
import DropDownComponent from './src/components/dropdown/dropdown.jsx';
import DropPlusInputComponent from './src/components/dropplusinput/dropplusinput.jsx';
import RepeatComponent from './src/components/repeater/repeat.jsx';

ReactDOM.render(
	<div>
		<DropPlusInputComponent ></DropPlusInputComponent>
		<ButtonComponent children="Log"></ButtonComponent>
		<ButtonComponent children="Add Another"></ButtonComponent>
	</div>, 
	document.getElementById("main")
);
