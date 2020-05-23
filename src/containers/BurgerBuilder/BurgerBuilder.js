import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildContols from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
const INGREDENT_PRICES={
    salad: 5,
    cheese:10,
    meat:12,
    bacon:8
}

class BurgerBuilder extends Component{

    state= {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,  

        },
        totalPrice: 15,
        purchaseable: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }


    addIngredientHandler = (type) =>{
        const oldCount =  this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition= INGREDENT_PRICES[type];
        const oldPrice = this.state.totalPrice; 
        const newPrice=oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) =>{
        const oldCount =  this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction= INGREDENT_PRICES[type];
        const oldPrice = this.state.totalPrice; 
        const newPrice=oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }


    render(){

        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key]= disableInfo[key] <=0
        }

        return(
            <Aux>
                <Modal />
                <Burger ingredients={this.state.ingredients}/>
                <BuildContols
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemove ={this.removeIngredientHandler}
                disabled={disableInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice} />
            </Aux>

        );
    }
}
 
export default BurgerBuilder