import React from 'react';
import { Link } from 'react-router';
import Order from './Order';
import Address from './Address';
import Confirmation from './Confirmation';
import NavBar from './NavBar';
import NavBarSimple from './NavBarSimple';
import Finish from './Finish';


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
  
  constructor(props) {
    super(props)
    this.state = {
      orderStep: 1 ,
      navBarColor : "white",
      navBarImg: "/img/logo/feedme_logo.png",
      navBarTextBlack: "text-black",
      nav1: "ORDER",
      nav2: "ADDRESS",
      nav3: "FINISH",
      navButton: "CANCEL ORDER",
      navBarTextGrey: "text-grey",
      navBarAddressBlack : "address-text-black",
      navBarFinishBlack : "finish-text-black",
      navBarArrow_1: "/img/icons/arrow_process.png",
      navBarArrow_2: "/img/icons/arrow_process.png",
      activeTab : ''
    };

    this.changeArrowBlack_1 = this.changeArrowBlack_1.bind(this);
    this.changeArrowBlack_2 = this.changeArrowBlack_2.bind(this);
    this.changeArrowGrey_1 = this.changeArrowGrey_1.bind(this);
    this.changeArrowGrey_2 = this.changeArrowGrey_2.bind(this);
  }

  changeArrowBlack_1() {
    this.setState({
      navBarArrow_1: "/img/icons/arrow_process-black.png"
    })
  }

  changeArrowBlack_2() {
    this.setState({
      navBarArrow_2: "/img/icons/arrow_process-black.png"
    })
  }

  changeArrowGrey_1() {
    this.setState({
      navBarArrow_1: "/img/icons/arrow_process.png"
    })
  }

  changeArrowGrey_2() {
    this.setState({
      navBarArrow_2: "/img/icons/arrow_process.png"
    })
  }

  setActiveTab(){
    this.setState({
      activeTab: "active-tab"
    })
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
          <NavBar navBarArrow_1={this.state.navBarArrow_1} navBarArrow_2={this.state.navBarArrow_2} navBarColor={this.state.navBarColor} navBarImg={this.state.navBarImg} navBarTextGrey={this.state.navBarTextGrey} navBarTextBlack={this.state.navBarTextBlack} nav1={this.state.nav1} nav2={this.state.nav2} nav3={this.state.nav3} navButton={this.state.navButton}/>
          <Order changeArrowBlack_1={this.changeArrowBlack_1} nextCase={this.nextCase.bind(this)} fieldValues={fieldValues} saveValues={this.saveValues.bind(this)} />
        </div>
      );

      case 2:
      return(
        <div>
          <NavBar navBarArrow_1={this.state.navBarArrow_1} navBarArrow_2={this.state.navBarArrow_2} navBarAddressBlack={this.state.navBarAddressBlack} navBarColor={this.state.navBarColor} navBarImg={this.state.navBarImg} navBarTextGrey={this.state.navBarTextGrey} navBarTextBlack={this.state.navBarTextBlack} nav1={this.state.nav1} nav2={this.state.nav2} nav3={this.state.nav3} navButton={this.state.navButton}/>
          <Address changeArrowBlack_2={this.changeArrowBlack_2} changeArrowGrey_1={this.changeArrowGrey_1} nextCase={this.nextCase.bind(this)} previousCase={this.previousCase.bind(this)} saveValues={this.saveValues.bind(this)} fieldValues={fieldValues} />
        </div>
      );

      case 3:
      return(
        <div>
          <NavBar navBarArrow_1={this.state.navBarArrow_1} navBarArrow_2={this.state.navBarArrow_2} navBarAddressBlack={this.state.navBarAddressBlack} navBarFinishBlack={this.state.navBarFinishBlack} navBarColor={this.state.navBarColor} navBarImg={this.state.navBarImg} navBarTextBlack={this.state.navBarTextBlack} nav1={this.state.nav1} nav2={this.state.nav2} nav3={this.state.nav3} navButton={this.state.navButton}/>
          <Confirmation changeArrowGrey_2={this.changeArrowGrey_2} nextCase={this.nextCase.bind(this)} fieldValues={fieldValues}  previousCase={this.previousCase.bind(this)}/>
        </div>
      );

      case 4:
      return(
        <div>
          <NavBarSimple/>
          <Finish fieldValues={fieldValues} />
        </div>
      );
    }
  }
}
