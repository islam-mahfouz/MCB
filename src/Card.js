import React from 'react';
import { Link } from 'react-router';
import Order from './Order';
import Address from './Address';
import Confirmation from './Confirmation';
import NavBar from './NavBar';


// in a more bigger project it is of course
// advisable to use flux/Redux to store this
// kind of information, but for the sake of
// simplicity thats how ill do it for now
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
      navBarColor : "white",
      navBarImg: "/img/logo/feedme_logo.png",
      navBarText: "text-black",
      nav1: "ORDER",
      nav2: "ADDRESS",
      nav3: "FINISH",
      navButton: "CANCEL ORDER"
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
        <div>
          <NavBar navBarColor={this.state.navBarColor} navBarImg={this.state.navBarImg} navBarText={this.state.navBarText} nav1={this.state.nav1} nav2={this.state.nav2} nav3={this.state.nav3} navButton={this.state.navButton}/>
          <Order nextCase={this.nextCase.bind(this)} fieldValues={fieldValues} saveValues={this.saveValues.bind(this)} />
        </div>
      );

      case 2:
      return(
        <div>
          <NavBar navBarColor={this.state.navBarColor} navBarImg={this.state.navBarImg} navBarText={this.state.navBarText} nav1={this.state.nav1} nav2={this.state.nav2} nav3={this.state.nav3} navButton={this.state.navButton}/>
          <Address nextCase={this.nextCase.bind(this)} previousCase={this.previousCase.bind(this)} saveValues={this.saveValues.bind(this)} fieldValues={fieldValues} />
        </div>
      );

      case 3:
      return(
        <div>
          <NavBar navBarColor={this.state.navBarColor} navBarImg={this.state.navBarImg} navBarText={this.state.navBarText} nav1={this.state.nav1} nav2={this.state.nav2} nav3={this.state.nav3} navButton={this.state.navButton}/>
          <Confirmation nextCase={this.nextCase.bind(this)} fieldValues={fieldValues}  previousCase={this.previousCase.bind(this)}/>
        </div>
      );

      case 4:

    }
  }
}
