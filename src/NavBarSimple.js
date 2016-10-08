import React from 'react';

export default class NavBarSimple extends React.Component {
  
  render() {
    return (
		<nav id="nav-bar" class="white">
		    <div class="nav-wrapper">
		      <a href="#" class="brand-logo text-black"><img src="/img/logo/feedme_logo.png" />feed.me</a>
		      <a href="#" data-activates="mobile-demo" class="button-collapse " ><i class="material-icons">menu</i></a>
		      <ul  class="right hide-on-med-and-down">
		        <li><a  class="waves-effect waves-light btn green-button"><i class="material-icons left check">check</i>ORDER SENT</a></li>
		      </ul>
		      <ul  class="side-nav" id="mobile-demo">
		        <li><a  class="waves-effect waves-light btn green-button"><i class="material-icons left">check</i>ORDER SENT</a></li>
		      </ul>
		    </div>
	  	</nav>
    );
  }
}
