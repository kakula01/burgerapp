import React from 'react';
import classes from './NavigationalItems.css';
import NavigationalItem from './NavigationalItem/NavigationalItem'

const NavigationalItems =() =>(
    <ul className={classes.NavigationalItems}>
        <NavigationalItem link ="/" >Burger builder</NavigationalItem>
        <NavigationalItem  link ="/" >Checkout</NavigationalItem>
    </ul>
)

export default NavigationalItems