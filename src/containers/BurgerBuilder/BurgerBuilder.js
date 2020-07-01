import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Backdrop from '../../components/UI/Modal/Backdrop/Backdrop'

const INGREDIENT_PRICES = {
    salad:0.3,
    cheese:0.7,
    meat:1.5,
    bacon:1.6
}

class BurgerBuilder extends React.Component {
    state= {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice : 4,
        purchasable:false,
        purchasing:false
    }

    addIngredients = (type) => {
        var oldCount = this.state.ingredients[type];
        var updatedCount = oldCount+1;
        var updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;
       var oldPrice =  INGREDIENT_PRICES[type];
       var newPrice = this.state.totalPrice + oldPrice;
     
       this.setState({
           ingredients : updateIngredients,
           totalPrice: newPrice
       })
       this.updatePurchaseable(updateIngredients);
    }

    removeIngredients = (type) => {
        var oldCount = this.state.ingredients[type];
       if(oldCount <= 0)
        return;
        var updatedCount = oldCount-1;
        var updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;
       var oldPrice =  INGREDIENT_PRICES[type];
       var newPrice = this.state.totalPrice - oldPrice;
        
       this.setState({
           ingredients : updateIngredients,
           totalPrice: newPrice
       })
       this.updatePurchaseable(updateIngredients);
    }
    updatePurchaseable =(ingredients)=> {
        var sum = Object.keys(ingredients)
                    .map(igkey=>{
                        return ingredients[igkey]
                    })
                    .reduce((sum, el)=>{
                        return sum+el
                    }, 0)
            this.setState({
                purchasable:sum > 0
            })
    }
    purchaseCancelHandler = ()=>{
        this.setState({
            purchasing:false
        })
    }
    purchaseHandler =() =>{
        this.setState({
            purchasing:true
        })
        
    }
    purchaseContinueHandler =() =>{
        alert("continued?");
    }
    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        for(var x in disableInfo) {
            disableInfo[x]= disableInfo[x] <= 0;
        }
        
        return (
            <Aux>
               
                <Modal show={this.state.purchasing} backdropCancel ={this.purchaseCancelHandler}>
                    <OrderSummary 
                    price ={this.state.totalPrice} 
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    ingredients= {this.state.ingredients}/>    
                 </Modal>
               <Burger  ingredient={this.state.ingredients}/>
                <BuildControls  
                    ingredientAdded= {this.addIngredients} 
                     ingredientRemove= {this.removeIngredients}
                     disabled= {disableInfo}
                     price ={this.state.totalPrice}
                     purchasable={this.state.purchasable}
                     orderSum = {this.purchaseHandler}/>
                
            </Aux>
        )
    }
}

export default BurgerBuilder