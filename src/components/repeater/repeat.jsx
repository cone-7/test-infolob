import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from '../button/button.jsx';
import DropPlusInputComponent from '../dropplusinput/dropplusinput.jsx';
import ShowListComponent from '../showlist/showlist.jsx';
import './repeat.css';

class RepeatComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: props.itemRepeat,
      restOfItemsDrop: [],
      itemsDrop: this.returnTypesTelephone(),
      itemSelected: '',
      logVisible: false,
    };
    this.onClickOption = this.onClickOption.bind(this);
    this.getValue = this.getValue.bind(this);
    this.returnTypesTelephone = this.returnTypesTelephone.bind(this);
    this.showLog = this.showLog.bind(this)
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

  onClickOption(event) {
  	//event.preventDefault();

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

  showLog(){
    this.setState({ logVisible: !this.state.logVisible });
  }


  render() {
    
    return (
      <div>
        {
          this.state.items.map((i, index, array) =>
              <div style={{display:'-webkit-box'}}>
                <DropPlusInputComponent style={{background:'blue'}} items={this.state.itemsDrop} getSelectedItem={this.getValue}/>
                <div className="removeButton">
                  <ButtonComponent disabled={this.state.itemsDrop.length===1} children="Remove" onClick={this.onClickOption}></ButtonComponent>
                </div>
              </div>
          )
        }
        {
          this.state.logVisible &&
            <ShowListComponent phones={this.state.restOfItemsDrop}></ShowListComponent>
        }
        <ButtonComponent disabled={this.state.itemsDrop.length===1} children="Add Another" onClick={this.onClickOption}></ButtonComponent>
        <ButtonComponent disabled={this.state.itemsDrop.length===1} children="Log" onClick={this.showLog}></ButtonComponent>
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
