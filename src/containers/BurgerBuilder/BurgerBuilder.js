import React from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
        purchasable:false
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
    render(){
        const disableInfo = {
            ...this.state.ingredients
        }
        for(var x in disableInfo) {
            disableInfo[x]= disableInfo[x] <= 0;
        }
        
        return (
            <Aux>
               <Burger  ingredient={this.state.ingredients}/>
                <BuildControls  
                    ingredientAdded= {this.addIngredients} 
                     ingredientRemove= {this.removeIngredients}
                     disabled= {disableInfo}
                     price ={this.state.totalPrice}
                     purchasable={this.state.purchasable}/>
                
            </Aux>
        )
    }
}

export default BurgerBuilder