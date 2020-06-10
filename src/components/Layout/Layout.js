import React from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css'

const Layout = (props)=> {
    return (
        <Aux>
            <div > toolbar </div>
            <main className= {classes.content}>
                {props.children}
            </main>
            
        </Aux>
    )
}

export default Layout
