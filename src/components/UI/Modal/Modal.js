import React from 'react';
import classes from './Modal.css'
import Backdrop from './Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary'


const modal = (props) => (
    <Aux>
        <Backdrop show= {props.show} backdropCancel ={props.backdropCancel}/>
    <div className= {classes.Modal}
        style={{
            transform: props.show? 'translateY(0)': 'translateY(-100vh)',
            opacity: props.show? '1': '0'
        }}>
        {props.children}
    </div>
    </Aux>
)

export default modal