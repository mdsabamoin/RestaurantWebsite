import React,{useContext,useState, useEffect} from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
const Cart = (props) =>{
const ctx = useContext(CartContext);
const [totalAmount,setTotalAmount] = useState(0);
const cartItem = <ul className={classes[`cart-items`]}>{ctx.items.map((item,index)=><li key={index}>
    
    {item.props.name}
    <div>{item.props.price}</div> 
    <button type="button">+</button>
    <button type="button" onClick={()=>{ctx.removeItem(item.props.id)}}>-</button>
    <span>{"   *   "}{item.quantity}</span>
    </li>)}</ul>
   
   useEffect(()=>{
       const a = ctx.items.reduce((acc,Curr)=>{return acc + Curr.quantity*Curr.props.price},0)
       Math.floor(a);
       setTotalAmount(a);
   },[ctx.items]);
  


return <Modal HideCart={props.HideCart}>
    {cartItem}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
    </div>
    <div className={classes.actions}>
        <button onClick={props.HideCart} className={classes[`button--alt`]}>Close</button>
        <button className={classes.button}>Order</button>
    </div>

</Modal>
}

export default Cart;