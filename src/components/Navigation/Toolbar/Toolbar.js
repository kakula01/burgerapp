import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationalItems from '../NavigationalItems/NavigationalItems'
import DrawerToggle from '../sideDrawer/DrawerToggle'
const Toolbar = (props)=>{
   
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked= {props.clicked} />
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