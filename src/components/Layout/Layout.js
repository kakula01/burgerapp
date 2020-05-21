import React from 'react'
import Aux from '../../hoc/Auxiliary'

const Layout = (props)=> {
    return (
        <Aux>
            <h1>zhdask</h1>
            <main>
                {props.children}
            </main>
            
        </Aux>
    )
}

export default Layout
