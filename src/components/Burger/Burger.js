import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
    const transformIngredient = Object.keys(props.ingredient).
             map(igkey =>{
                     return [...Array(props.ingredient[igkey])].map((_, i) => {
                 return  <BurgerIngredient key={igkey+i}  type={igkey} />
             })
          })
          console.log(transformIngredient);
   
    return (
        <div className ={classes.Burger}>
            
            <BurgerIngredient  type="bread-top"/>
           {transformIngredient}
            <BurgerIngredient  type="bread-bottom"/>
            
        </div>
    )
}

export default Burger
