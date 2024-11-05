import React,{useContext} from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";
const MealItemForm = (props) =>{
    // const [iscart,setIscart] = useState(false);
        const ctx = useContext(CartContext);
    return (<div className={classes.form}>
        <Input label="Amount" input={{
            id:"amount",
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
        }}/>
        <button onClick={()=>ctx.addItem(props)}>+ Add</button>
    </div>)
}
export default MealItemForm;