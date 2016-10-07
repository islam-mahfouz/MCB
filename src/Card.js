import React from 'react';
import { Link } from 'react-router';
import Order from './Order';
import Address from './Address';
import Confirmation from './Confirmation';

var fieldValues = {
  firstname  : null,
  surname    : null,
  streetName : null,
  streetNo   : null,
  postcode   : null,
  cityName   : null,
  pizzaSize  : null,
  cheese     : null,
  ingredients: []
}

export default class Card extends React.Component {
  
  constructor() {
    super()
    this.state = {
      orderStep: 1 ,
    };
  }


saveValues(fields) {
  return function() {

    fieldValues = Object.assign({}, fieldValues, fields)
  }()
}

  nextCase() {
  this.setState({
    orderStep : this.state.orderStep + 1
  })
}

  previousCase(){
    this.setState({
      orderStep : this.state.orderStep -1
    })
  }

  render(){
    
  	switch(this.state.orderStep){
      case 1:
      return(
        <Order nextCase={this.nextCase.bind(this)} fieldValues={fieldValues} saveValues={this.saveValues.bind(this)} />
      );

      case 2:
      return(
        <Address nextCase={this.nextCase.bind(this)} previousCase={this.previousCase.bind(this)} saveValues={this.saveValues.bind(this)} fieldValues={fieldValues} />
      );

      case 3:
      return(
        <Confirmation nextCase={this.nextCase.bind(this)} fieldValues={fieldValues}  previousCase={this.previousCase.bind(this)}/>
      );

      case 4:
      
    }
  }
}
