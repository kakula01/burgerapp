import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationalItems from '../NavigationalItems/NavigationalItems'

const Toolbar = (props)=>{
   
    return (
        <header className={classes.Toolbar}>
            <div onClick= {props.clicked}>Menu</div>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationalItems />
            </nav>
        </header>
    )
}

export default Toolbar