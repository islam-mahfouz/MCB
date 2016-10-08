import React from 'react';



export default class Finish extends React.Component {
  

  render(){

  	return(
  		<div id="confirmation-layout" class="card-layout container" >
        <div class="card-panel white">
        	<div class="center">
        		<h5 class="bold">Thank you for your order, {this.props.fieldValues.firstname}!</h5>
        		<p class="bold margin-top-30 margin-bottom-30">Order is on the way.</p>
        	</div>
        </div>
        <div class="row margin-top-20">
            <a  class="waves-effect waves-light btn red-button col s2 offset-s5 close-btn">CLOSE</a>
        </div>    
      </div>
  	);
  }
}
