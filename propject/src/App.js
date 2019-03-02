// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

// export default App;

import React , {Component} from "react";
 
import {connect} from "react-redux";
 
import {bindActionCreators} from "redux";
import * as actions from "./new/new/actions";
import ShopItem from './new/new/ShopItem';

class App extends Component {
 
	calcTotal() {
		var sum = 0;
		var cart = this.props.cart;
		this.props.cart.forEach((item)=>{
			sum +=(item.price*item.amount)
		});
		return sum;
	}
 
 
	render(){
		return (
			<div>
				<p>
					{JSON.stringify(this.props.cart)}
				</p>
				<h1>购物车</h1>	
				{this.props.cart.map(function(item){
					return (<ShopItem key = {item.id} item = {item}/>)
				})}
				
				<hr/>
				<p>
					总价格：{this.calcTotal()} 
				</p>
			</div>	
		);
	}
}
 
export default connect(
	(state) => {
		return {
			cart: state.cart		
		}
	},
	(dispatch) => {
		return {
		 actions : bindActionCreators(actions,dispatch)
		}
	}
)(App);

