import React from 'react';
import NavBar from "./NavBar.js";
import Card from "./Card.js";
import Homepage from './Homepage';



export default class Application extends React.Component {
  
constructor() {
    super()
    this.state = {
      step: 1 ,
      navBarImg: "/img/logo/feedme_logo_white.png",
      nav1: "OVERVIEW",
      nav2: "TODAY'S MEAL",
      nav3: "MORE",
      navButton: "ORDER TODAY'S MEAL"
    };
  }	

  nextStep() {
  this.setState({
    step : this.state.step + 1
  })
}

previousStep() {
  this.setState({
    step : this.state.step - 1
  })
}

 render(){
  	switch (this.state.step){
  		case 1:
  		return(
      <div>
  		<NavBar nextStep={this.nextStep.bind(this)} navBarImg={this.state.navBarImg} navButton={this.state.navButton} nav1={this.state.nav1} nav2={this.state.nav2} nav3={this.state.nav3} />
      	<Homepage nextStep={this.nextStep.bind(this)} />
      </div>);

  		case 2:
  		return(
      <div>
      	<Card previousStep={this.previousStep.bind(this)} />
      </div>);
  	}
  }
}
