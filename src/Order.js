import React from 'react';
import { Link } from 'react-router';

export default class Order extends React.Component {
constructor() {
    super()
    this.state = {
      selectedCircle:{} ,
    };
  }

 toggleChoice(name, event) {
     let selected = this.state.selectedCircle;
     selected = {};
     selected[name] = this.state.selectedCircle[name] == "active" ? "" : "active";
     this.setState({selectedCircle: selected});
  }

  render() {
  	const { selected } = this.state;
  	const selectedCircle = selected ? "active":"";
    return (
		<div class="container" id="order-layout">
			<div class="row">
				
			        <div class="card-panel white">
			          <div class="center">
			          	<h5>Your Order</h5>
			          	<p class="margin-top-30 bold">Choose Pizza size in cm</p>
			          	<ul class="margin-top-30">
				          	<li ><div onClick={this.toggleChoice.bind(this, "first")} class={"circle-20 hovered-circle " + this.state.selectedCircle["first"]}>20</div></li>
				          	<li ><div onClick={this.toggleChoice.bind(this, "second")} class={"circle-30 hovered-circle " + this.state.selectedCircle["second"]}>30</div></li>
				          	<li ><div onClick={this.toggleChoice.bind(this, "third")} class={"circle-40 hovered-circle " + this.state.selectedCircle["third"]}>40</div></li>
				        </ul> 
			         	<p class="bold margin-top-20">Ingredients:</p>
			         	<div class="row">
					    <select class="browser-default col s5 offset-s3" defaultValue="0">
					      <option value="0" disabled>Choose Ingredients</option>
					      <option value="1">Tomato sauce</option>
					      <option value="2">Mozarella</option>
					      <option value="3">Mushrooms</option>
					    </select>
					    <i class="material-icons medium col s1 add-ingredient">add_box</i>
					    </div>
					    <p class="bold margin-top-30">Cheese rand ?</p>
					    <div class="switch margin-top-20">
					    	<label>no
					    	<input type="checkbox" />
					    	<span class="lever"></span>
					    	yes</label>
					    </div>
					    <Link to="Address" class="waves-effect waves-light btn red-button margin-top-40"><i class="material-icons right">arrow_forward</i>Next</Link>
			          </div>
			        </div>
			</div>
		</div>
    );
  }
}
