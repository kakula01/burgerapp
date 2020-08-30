import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationalItems from '../NavigationalItems/NavigationalItems'
import classes from './sideDrawer.css'
import Backdrop from '../../UI/Modal/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary'

const SideDrawer =(props) =>{
    let attachClasses = [classes.sideDrawer, classes.Close];
    if(props.open){
        attachClasses = [classes.sideDrawer, classes.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.open} backdropCancel={props.backdropCancel}/>
        <div className ={attachClasses.join(' ')}>
            <div className ={classes.Logo}>
            <Logo />
            </div>
            <nav>
                <NavigationalItems />
            </nav>
        </div>
        </Aux>
    )
}

export default SideDrawer