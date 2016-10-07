import React from 'react';
import { Link } from 'react-router';


export default class Address extends React.Component {
  
  render(){
  	return(
  		<div id="address-layout" class="card-layout container">
        <div class="card-panel white">
            <h5 class="center bold">Delivery Address</h5>
            <div class="row margin-top-40">
              <div class="col s6 offset-s3">
                <p class="bold">FIRST NAME</p>
                <input placeholder="First Name" id="first-name" type="text" class="validate"/>
              </div>
            </div> 
            <div class="row">
              <div class="col s6 offset-s3">
                <p class="bold">SURNAME</p>
                <input placeholder="Surname" id="sur-name" type="text" class="validate"/>
              </div>
            </div> 
            <div class="row">
              <div class="col s5 offset-s3">
                <p class="bold">STREET/NO</p>
                <input placeholder="Street" id="street" type="text" class="validate"/>
              </div>
              <div class="col s1 street-no">
                <input placeholder="No." id="street-no" type="text" class="validate"/>
              </div>
            </div> 
            <div class="row">
              <div class="col s2 offset-s3">
                <p class="bold">POSTCODE/CITY</p>
                <input placeholder="PostCode" id="postcode" type="text" class="validate"/>
              </div>
              <div class="col s4 city">
                <input placeholder="City" id="city" type="text" class="validate"/>
              </div>
            </div>
            <div class="divider"></div>
            <div class="center">
              <Link to="Order" class="left back-btn"><img src="/img/icons/back_arrow.png" class="back-arrow"/>Back</Link>
              <Link to="Confirmation" class="waves-effect waves-light btn red-button margin-top-20"><i class="material-icons right">arrow_forward</i>Next</Link>            
            </div>       
        </div>
      </div>
  	);
  }
}
