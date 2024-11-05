import React from "react";
import classes from "./MealItem.css";
import MealItemForm from "../MealItemForm";
const MealItem = (props) =>{
    // console.log(props);
    const price = `$${props.price}`
    return(<li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
         <MealItemForm props={props}/>    
        </div>     
    </li>)
}

export default MealItem;