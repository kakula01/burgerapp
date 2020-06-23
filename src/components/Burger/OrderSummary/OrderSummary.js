import React from 'react';
import Aux from '../../../hoc/Auxiliary'

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
        <p>Continue to checkout?</p>
     </Aux>
    )
}

export default OrderSummary