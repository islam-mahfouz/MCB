import React from 'react';
import { Link } from "react-router";
import NavBar from "./NavBar.js"


export default class Application extends React.Component {
  
  render(){
  	return(
      <div>
  		<NavBar location={location}/>
      {this.props.children}
      </div>

  	);
  }
}
