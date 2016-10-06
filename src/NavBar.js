import React from 'react';


export default class NavBar extends React.Component {
  
  render() {
    return (
		<nav id="nav-bar">
		    <div class="nav-wrapper">
		      <a href="JavaScript:" class="brand-logo"><img src="/img/logo/feedme_logo_white.png" />feed.me</a>
		      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
		      <ul  class="right hide-on-med-and-down">
		        <li><a href="JavaScript:">OVERVIEW</a></li>
		        <li><a href="JavaScript:">TODAY'S MEAL</a></li>
		        <li><a href="JavaScript:">MORE</a></li>
		        <li><a class="waves-effect waves-light btn red-button">ORDER TODAY'S MEAL</a></li>
		      </ul>
		      <ul  class="side-nav" id="mobile-demo">
		        <li><a href="JavaScript:">OVERVIEW</a></li>
		        <li><a href="JavaScript:">TODAY'S MEAL</a></li>
		        <li><a href="JavaScript:">MORE</a></li>
		        <li><a class="waves-effect waves-light btn red-button">ORDER TODAY'S MEAL</a></li>
		      </ul>
		    </div>
	  	</nav>
    );
  }
}
