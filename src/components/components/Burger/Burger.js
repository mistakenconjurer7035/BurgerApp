import React from 'react'
import './Burger.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
//import { transformFile } from 'babel-core';

const Burger = (props)=>{
    return(
    <div className = "Burger">
        <BurgerIngredients type = "bread-top"/>
        <BurgerIngredients type = "meat"/>
        <BurgerIngredients type = "cheese"/>
        <BurgerIngredients type = "meat"/>
        <BurgerIngredients type = "cheese"/>
        <BurgerIngredients type = "bacon"/>
        <BurgerIngredients type = "salad"/>
        <BurgerIngredients type = "bread-bottom"/>
    </div>
    );
};
export default Burger;