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
      inputValue: '',
    };
    this.addPhone = this.addPhone.bind(this);
    this.getValueDrop = this.getValueDrop.bind(this);
    this.getValueInput = this.getValueInput.bind(this);
    this.returnTypesTelephone = this.returnTypesTelephone.bind(this);
    this.showLog = this.showLog.bind(this);
    this.remove = this.remove.bind(this);
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

  addPhone() {
  	
    let itemToAdd = {'type': this.state.itemSelected.label, 'number': this.state.inputValue};
    this.setState(prevState => {
        let itemsAux = this.state.items;
        if(prevState.items.length===1){
          itemsAux[0] = itemToAdd;
          itemsAux.push([]);
        }
        else{
          itemsAux[itemsAux.length-1] = itemToAdd;
          itemsAux.push([]);
        }
        return {
          itemsDrop: prevState.itemsDrop.filter(e => e.value !== prevState.itemSelected.value),
          items:  itemsAux, 
        }
    });

  }

  getValueDrop(item) {
    this.state.restOfItemsDrop.push(this.state.itemsDrop.filter(e => e.value === item.value)[0]);
    this.setState({
      itemSelected: item
    });
  }

  getValueInput(value) {
    this.setState({
      inputValue: value,
    });
  }

  showLog(){
    this.setState({ logVisible: !this.state.logVisible });
  }

  remove(i){
    if(this.state.items[i].type){
      let auxItem = this.state.items.slice(0,i).concat(this.state.items.slice(i+1,this.state.items.length-1));
      auxItem.push([]);
      this.setState({
        itemsDrop: [...this.state.itemsDrop,this.state.restOfItemsDrop.filter(e => e.label === this.state.items[i].type)[0]],
        inputValue: '',
        items: auxItem
      })
    }
  }


  render() {
    
    return (
      <div>
        {
          this.state.items.map((i, index, array) =>
            <div style={{display:'-webkit-box'}} key={i.type}>
              <DropPlusInputComponent style={{background:'blue'}} 
                items={this.state.itemsDrop} 
                defaultInput={i.number} 
                defaultDropDown={i.type} 
                getSelectedItem={this.getValueDrop}
                onBlurInput={this.getValueInput} />
              <div className="removeButton">
                <ButtonComponent 
                  disabled={!this.state.items[index].type} 
                  children="Remove" 
                  onClick={() => this.remove(index)}>
                </ButtonComponent>
              </div>
            </div>
          )
        }
        <ButtonComponent disabled={this.state.itemsDrop.length===1} children="Add Another" onClick={this.addPhone}></ButtonComponent>
        <ButtonComponent disabled={this.state.items.length===1} children="Log" onClick={this.showLog}></ButtonComponent>
        {
          this.state.logVisible &&
            <div>
              <ShowListComponent phones={this.state.items} ></ShowListComponent>
            </div>
        }
      </div>
    );
  }
}

RepeatComponent.propTypes = {
  label: PropTypes.string,
  itemRepeat: PropTypes.array,
  name: PropTypes.string.isRequired,
};

export default RepeatComponent;
