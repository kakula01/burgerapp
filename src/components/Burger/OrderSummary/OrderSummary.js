import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Modal/Button/Button'

const OrderSummary = (props) => {
    const orderedIngredients = Object.keys(props.ingredients)
            .map(igkey=>{
            return <li key={igkey}><span style={{textTransform:"capitalize"}}>{igkey}</span>: {props.ingredients[igkey]}</li>
            })
    return (
     <Aux>
        <h3>Thanks for ordering</h3>
        <p>Your delicious burger has following ingredients:</p>
        <ul>
            {orderedIngredients}
        </ul>
        <p><strong>Total price: {props.price}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
        <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
     </Aux>
    )
}

export default OrderSummary