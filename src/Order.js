import React from 'react';
import { Link } from 'react-router';

export default class Order extends React.Component {
constructor() {
    super()
    this.state = {
      selectedCircle:{},
      cheeseAdd: false,
      ingredient:'',
      ingredientsArray: []
    };
  }

  onSelectIngredient(e){
    this.setState({
      ingredient: e.target.value
    })
  }

addIngredient(){

    this.state.ingredientsArray.push(this.state.ingredient+" ");
    this.forceUpdate();
  }

  onAddCheese(){
  	let add = !this.state.cheeseAdd;

  	this.setState({cheeseAdd : add});
  }

  saveAndContinue(e){
    e.preventDefault();
    var pizzaObject = JSON.stringify(this.state.selectedCircle);
    var pizza = pizzaObject.substring(2,4);
    if(this.state.cheeseAdd == true)
    {
    	var cheeseChoice = "Yes";
    }
    else{
    	var cheeseChoice = "No"
    }
    var data = {
       pizzaSize   : pizza,
       cheese      : cheeseChoice,
       ingredients : [this.state.ingredientsArray]
    }

    this.props.saveValues(data);
    this.props.changeArrowBlack_1();
    this.props.nextCase();
  }

 toggleChoice(name, event) {
     let selected = this.state.selectedCircle;
     selected = {};
     selected[name] = this.state.selectedCircle[name] == "active-circle" ? "" : "active-circle";
     this.setState({selectedCircle: selected});
  }

  

  render() {
  	const { selected } = this.state;
  	const selectedCircle = selected ? "active-circle":"";
    return (
		<div class="container card-layout" id="order-layout">
			<div class="row">
				
			        <div class="card-panel white">
			          <div class="center">
			          	<h5 class="bold">Your Order</h5>
			          	<p class="margin-top-30 bold">Choose Pizza size in cm</p>
			          	<ul class="margin-top-30">
				          	<li ><div onClick={this.toggleChoice.bind(this, "20")} class={"circle-20 hovered-circle " + this.state.selectedCircle["20"]}>20</div></li>
				          	<li ><div onClick={this.toggleChoice.bind(this, "30")} class={"circle-30 hovered-circle " + this.state.selectedCircle["30"]}>30</div></li>
				          	<li ><div onClick={this.toggleChoice.bind(this, "40")} class={"circle-40 hovered-circle " + this.state.selectedCircle["40"]}>40</div></li>
				        </ul> 
			         	<p class="bold margin-top-20">Ingredients:</p>
			         	<div class="row">
    					    <select class="browser-default col s5 offset-s3" defaultValue="0" onChange={this.onSelectIngredient.bind(this)}>
    					      <option value="0" disabled>Choose Ingredients</option>
    					      <option value="Tomato sauce">Tomato sauce</option>
    					      <option value="Mozarella">Mozarella</option>
    					      <option value="Mushrooms">Mushrooms</option>
    					    </select>
    					    <i onClick={this.addIngredient.bind(this)} class="material-icons medium col s1 add-ingredient">add_box</i>
					    </div>
              <div class="row ingredients-row">
                {this.state.ingredientsArray.map(item => <span class="col s3">{item}<img src="/img/icons/cancel_small.png" /></span> )}
              </div>  
					    <p class="bold margin-top-30">Cheese rand ?</p>
					    <div class="switch margin-top-20">
					    	<label>no
					    	<input ref="cheeseRand" type="checkbox" checked={this.state.cheeseAdd} onChange={this.onAddCheese.bind(this)}  />
					    	<span class="lever"></span>
					    	yes</label>
					    </div>
					    <div class="divider margin-top-30"></div>
					    <button onClick={this.saveAndContinue.bind(this)} class="waves-effect waves-light btn red-button margin-top-20"><i class="material-icons right">arrow_forward</i>Next</button>
			          </div>
			        </div>
			</div>
		</div>
    );
  }
}
