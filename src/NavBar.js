import React from 'react';
import { Link } from "react-router";


export default class NavBar extends React.Component {
  
  render() {
    return (
		<nav id="nav-bar" class={this.props.navBarColor}>
		    <div class="nav-wrapper">
		      <a href="#" class={"brand-logo " + this.props.navBarText}><img src={this.props.navBarImg} />feed.me</a>
		      <a href="#" data-activates="mobile-demo" class={"button-collapse " + this.props.navBarText}><i class="material-icons">menu</i></a>
		      <ul  class="right hide-on-med-and-down">
		        <li><a class={this.props.navBarText} href="JavaScript:">{this.props.nav1}</a></li>
		        <li><a  href="JavaScript:">{this.props.nav2}</a></li>
		        <li><a  href="JavaScript:">{this.props.nav3}</a></li>
		        <li><a onClick={this.props.nextStep} class="waves-effect waves-light btn red-button">{this.props.navButton}</a></li>
		      </ul>
		      <ul  class="side-nav" id="mobile-demo">
		        <li><a href="JavaScript:">{this.props.nav1}</a></li>
		        <li><a href="JavaScript:">{this.props.nav2}</a></li>
		        <li><a href="JavaScript:">{this.props.nav3}</a></li>
		        <li><a onClick={this.props.nextStep} class="waves-effect waves-light btn red-button">{this.props.navButton}</a></li>
		      </ul>
		    </div>
	  	</nav>
    );
  }
}
