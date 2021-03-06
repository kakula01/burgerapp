import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'salad'},
]

const BuildControls = (props) => {
    
    return (
    <div className={classes.BuildControls}>
       <p><strong>Total price {props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=> {
             return <BuildControl 
                        added ={()=> props.ingredientAdded(ctrl.type)} 
                        removed ={()=> props.ingredientRemove(ctrl.type)}
                         key={ctrl.label} 
                         label={ctrl.label}
                         disabled ={props.disabled[ctrl.type]}
                        />
        })} 

        <button 
        className= {classes.OrderButton} 
        disabled={!props.purchasable}
        onClick ={props.orderSum}>
            Checkout
        </button>
    
    </div>
    )
}

export default BuildControls;