import React from 'react';
import { Link } from "react-router";
import NavBar from "./NavBar.js"

export default class Layout extends React.Component {
  
  render(){
  	return(
  		<div>

  			<NavBar/>

  			<div class="container center" id="main-layout">
  				<div class="row">
  					<img src="/img/logo/feedme_logo_white.png"/>
  					<h4>Chosen food every 5 days.</h4>
  					<p class="today-meal">Today on the table: <span>Original Steinofen-Pizza</span></p>
  					<a class="waves-effect waves-light btn red-button">ORDER TODAY'S MEAL</a>
  					<p class="tomorrow-meal">Check out our meal for tomorrow</p>
  					<p class="made-with-love">Made with love.</p>
  					<img class="scroll-img" src="/img/icons/scroll_icon.png" />
  				</div>
  			</div>
  		</div>	
  	);
  }
}
