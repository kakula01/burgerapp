import React, {Component} from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css'
import SideDrawer from '../Navigation/sideDrawer/sideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {
    state ={
        showSideDrawer:true
    }
    closeSideDrawerHandler = () =>{ 

        this.setState({showSideDrawer:false}) 
    }
    toggleSideDrawerHandler = () =>{  
        this.setState((prevState)=>{return{showSideDrawer:!prevState.SideDrawer}
        }) 
    }
   
    render(props){
      
        return (
            <Aux>
            <Toolbar clicked={this.toggleSideDrawerHandler}/>
            <SideDrawer 
                open ={this.state.showSideDrawer}
                backdropCancel={this.closeSideDrawerHandler}/>
            <main className= {classes.content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}
// const Layout = (props)=> {
//     return (
        
//     )
// }

export default Layout
