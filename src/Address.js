import React from 'react';

export default class Address extends React.Component {

  saveAndContinue(e){
    e.preventDefault();
    var data = {
     firstname : this.refs.firstname.value,
     surname   : this.refs.surname.value,
     streetName: this.refs.streetName.value,
     streetNo  : this.refs.streetNo.value,
     postcode  : this.refs.postcode.value,
     cityName  : this.refs.cityName.value
   }
   
   this.props.saveValues(data);
   this.props.changeArrowBlack_2();
   this.props.nextCase();
 }

 goBack(){
  this.props.changeArrowGrey_1();
  this.props.previousCase();
}

  render(){
    return(
      <div id="address-layout" class="card-layout container">
        <div class="card-panel white">
            <h5 class="center bold">Delivery Address</h5>
            <div class="row margin-top-40">
              <div class="col s6 offset-s3">
                <p class="bold">FIRST NAME</p>
                <input placeholder="First Name" defaultValue={this.props.fieldValues.firstname}  id="first-name" ref="firstname" type="text" class="validate"/>
              </div>
            </div> 
            <div class="row">
              <div class="col s6 offset-s3">
                <p class="bold">SURNAME</p>
                <input placeholder="Surname" defaultValue={this.props.fieldValues.surname} id="sur-name" ref="surname" type="text" class="validate"/>
              </div>
            </div> 
            <div class="row">
              <div class="col s5 offset-s3">
                <p class="bold">STREET/NO</p>
                <input placeholder="Street" defaultValue={this.props.fieldValues.streetName} id="street" ref="streetName" type="text" class="validate"/>
              </div>
              <div class="col s1 street-no">
                <input placeholder="No." defaultValue={this.props.fieldValues.streetNo} id="street-no" ref="streetNo" type="text" class="validate"/>
              </div>
            </div> 
            <div class="row">
              <div class="col s2 offset-s3">
                <p class="bold">POSTCODE/CITY</p>
                <input placeholder="PostCode" defaultValue={this.props.fieldValues.postcode} id="postcode" ref="postcode" type="text" class="validate"/>
              </div>
              <div class="col s4 city">
                <input placeholder="City" defaultValue={this.props.fieldValues.cityName} id="city" ref="cityName" type="text" class="validate"/>
              </div>
            </div>
            <div class="divider"></div>
            <div class="center">
              <a onClick={this.goBack.bind(this)} class="left back-btn"><img src="/img/icons/back_arrow.png" class="back-arrow"/>Back</a>
              <a onClick={this.saveAndContinue.bind(this)} class="waves-effect waves-light btn red-button margin-top-20"><i class="material-icons right">arrow_forward</i>Next</a>            
            </div>       
        </div>
      </div>
    );
  }

}
