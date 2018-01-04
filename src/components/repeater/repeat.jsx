import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from '../button/button.jsx';
import DropPlusInputComponent from '../dropplusinput/dropplusinput.jsx';

class RepeatComponent extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      items: props.itemRepeat,
      restOfItemsDrop: [],
      itemsDrop: this.returnTypesTelephone(),
      itemSelected: '',
    };
    this.onClickOption = this.onClickOption.bind(this);
    this.getValue = this.getValue.bind(this);
    this.returnTypesTelephone = this.returnTypesTelephone(this);
  }

  returnTypesTelephone(){
    return [
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
  }

  onClickOption( event) {
  	//event.preventDefault();

    /*this.state.restOfItems.push(item)
    const index = this.state.items.findIndex(function(ele){
      return ele.value === item.value;
    });*/

    this.state.items.push([]);

    this.setState({
      itemsDrop: this.state.itemsDrop.filter(e => e.value !== this.state.itemSelected.value)
    });

  }

  getValue(item) {
    this.state.restOfItemsDrop.push(this.state.itemsDrop.filter(e => e.value === item.value)[0]);
    this.setState({
      itemSelected: item
    });
  }

  render() {
    
    return (
      <div>
        {
          this.state.items.map((i, index, array) =>
              <div>
                <DropPlusInputComponent items={this.state.itemsDrop} getSelectedItem={this.getValue}/>
              </div>
          )
        }
        <ButtonComponent children="Add Another" onClick={this.onClickOption}></ButtonComponent>
      </div>
    );
  }
}

RepeatComponent.propTypes = {
  label: PropTypes.string,
  itemRepeat: PropTypes.array,
  itemsShow: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
  name: PropTypes.string.isRequired,
};

export default RepeatComponent;
