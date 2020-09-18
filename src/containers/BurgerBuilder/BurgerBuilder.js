import React, { Component } from 'react';
//import Aux from '../../HOC/Auxillary'
import Burger from '../../components/components/Burger/Burger'
class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
    }
    render(){
        return(
            <Burger/>
        );
    }
}
export default BurgerBuilder;