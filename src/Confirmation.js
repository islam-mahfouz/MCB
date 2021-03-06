import React from 'react';



export default class Confirmation extends React.Component {
  
 goBack(){
    this.props.changeArrowGrey_2();
    this.props.previousCase();
  }

  resetOrderValues(){
    this.props.fieldValues.firstname = null;
    this.props.fieldValues.surname = null;
    this.props.fieldValues.streetName = null;
    this.props.fieldValues.streetNo = null;
    this.props.fieldValues.postcode = null;
    this.props.fieldValues.cityName = null;
    this.props.fieldValues.pizzaSize = null;
    this.props.fieldValues.cheese = null;
    this.props.fieldValues.ingredients = [];
  }

  makeOrder(){
    var input = this.props.fieldValues;
    var url = 'https://echo.getpostman.com/post';

    jQuery.ajax({
        type: "POST",
        crossDomain:true,
        url: url,
        data: input,
        dataType: 'json',
        async: true
    });
  
    this.resetOrderValues.bind(this)();
    this.props.nextCase();
  }

  render(){
  	return(
  		<div id="confirmation-layout" class="card-layout container">
        <div class="card-panel white">
        	<div class="center">
        		<h5 class="bold">Everything correct ?</h5>
        		<p class="bold margin-top-40">Your order:</p>
        		<div class="row margin-top-20">
        			<p class="bold col s6 ">Steinofen-Pizza:</p>
        			<p class="bold col s3 offset-s1">Pizza size:</p>
        		</div>
        		<div class="row margin-top-20">
        			<p class="col s6">1x</p>
        			<p class="col s3 offset-s1">{this.props.fieldValues.pizzaSize}cm</p>
        		</div>
        		<div class="row margin-top-20">
        			<p class="bold col s6 ">Ingredients:</p>
        			<p class="bold col s3 offset-s1">Cheese rand:</p>
        		</div>
        		<div class="row margin-top-20">
        			<p class="col s6">{this.props.fieldValues.ingredients}</p>
        			<p class="col s3 offset-s1">{this.props.fieldValues.cheese}</p>
        		</div>
        		<p class="bold margin-top-30">Delivery Address:</p>
        		<p class="margin-top-30">{this.props.fieldValues.firstname} {this.props.fieldValues.surname}</p>
        		<p class="margin-top-10">{this.props.fieldValues.streetName}, {this.props.fieldValues.streetNo}</p>
        		<p class="margin-top-10">{this.props.fieldValues.postcode} {this.props.fieldValues.cityName}</p>
        		<div class="divider margin-top-30"></div>
            	<div class="center">
	              <a onClick={this.goBack.bind(this)} class="left back-btn"><img src="/img/icons/back_arrow.png" class="back-arrow"/>Back</a>
	              <a onClick={this.makeOrder.bind(this)}  class="waves-effect waves-light btn red-button margin-top-20">Make Order</a>            
	            </div> 
        	</div>
        </div>
      </div>
  	);
  }
}
