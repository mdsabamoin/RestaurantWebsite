
import React from "react";
import "./Card.css"
const Card = (props)=>{
    const classZ = "card " + props.className;
    return(<div className={classZ}>
        {props.children}
    </div>)
}

export default Card;