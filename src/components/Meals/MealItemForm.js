import React,{useContext,useState} from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";
const MealItemForm = (props) =>{
    // const [iscart,setIscart] = useState(false);
        const ctx = useContext(CartContext);
        const [quantity,setQuantity] = useState(1);

        const InputHandler = (event)=>{
            if(quantity>=1 && quantity<=5){
                setQuantity(event.target.value);
            }
           
        }
        const objwithQuantity = {...props,"quantity":quantity};
    return (<div className={classes.form}>
        <Input label="Amount" input={{
            id:"amount",
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            value:quantity,
            onChange:InputHandler
        }}/>
        <button onClick={()=>ctx.addItem(objwithQuantity)}>+ Add</button>
    </div>)
}
export default MealItemForm;