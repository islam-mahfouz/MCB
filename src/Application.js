import React from 'react';
import { Link } from "react-router";
import NavBar from "./NavBar.js";
import Card from "./Card.js";
import Homepage from './Homepage';



export default class Application extends React.Component {
  
constructor() {
    super()
    this.state = {
      step: 1 ,
    };
  }	

  nextStep() {
  this.setState({
    step : this.state.step + 1
  })
}

 render(){
  	switch (this.state.step){
  		case 1:
  		return(
      <div>
  		<NavBar nextStep={this.nextStep.bind(this)} />
      	<Homepage nextStep={this.nextStep.bind(this)} />
      </div>);

  		case 2:
  		return(
      <div>
      	<Card />
      </div>);
  	}
  }
}
