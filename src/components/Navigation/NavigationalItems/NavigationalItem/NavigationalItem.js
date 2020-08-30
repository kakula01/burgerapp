import React from 'react';
import classes from './NavigationalItem.css';


const NavigationalItem =(props) =>
{
    console.log(props.active);
    return (
    <li className={classes.NavigationalItem}>
        <a href={props.link} className={props.active? classes.active: null}>{props.children}</a>
        
     </li>
    )
}

export default NavigationalItem