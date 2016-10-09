import React from 'react';

export default class NavBar extends React.Component {
  
  orderAction(){
  	if(this.props.navButton == 'CANCEL ORDER'){
  		this.props.previousStep();
  	}
  	else{
  		this.props.nextStep();
  	}
  }	

  render() {
    return (
		<nav id="nav-bar" class={this.props.navBarColor}>
		    <div class="nav-wrapper">
		      <a href="JavaScript:" class={"brand-logo " + this.props.navBarTextBlack}><img src={this.props.navBarImg} />feed.me</a>
		      <a href="#" data-activates="mobile-demo" class={"button-collapse " + this.props.navBarTextBlack}><i class="material-icons">menu</i></a>
		      <ul  class="right hide-on-med-and-down">
		        <li><a class={this.props.navBarTextBlack} href="JavaScript:">{this.props.nav1}</a></li>
		        <li><img src={this.props.navBarArrow_1}/></li>
		        <li><a class={this.props.navBarTextGrey + " " + this.props.navBarAddressBlack} href="JavaScript:">{this.props.nav2}</a></li>
		        <li><img src={this.props.navBarArrow_2}/></li>
		        <li><a class={this.props.navBarTextGrey + " " + this.props.navBarFinishBlack} href="JavaScript:">{this.props.nav3}</a></li>
		        <li><a onClick={this.orderAction.bind(this)} class="waves-effect waves-light btn red-button">{this.props.navButton}</a></li>
		      </ul>
		      <ul  class="side-nav" id="mobile-demo">
		        <li><a href="JavaScript:">{this.props.nav1}</a></li>
		        <li><a href="JavaScript:">{this.props.nav2}</a></li>
		        <li><a href="JavaScript:">{this.props.nav3}</a></li>
		        <li><a onClick={this.orderAction.bind(this)} class="waves-effect waves-light btn red-button">{this.props.navButton}</a></li>
		      </ul>
		    </div>
	  	</nav>
    );
  }
}
