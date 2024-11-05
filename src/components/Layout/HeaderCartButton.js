import React,{Fragment,useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context"
const HeaderCartButton = (props) =>{
    const ctx = useContext(CartContext);
    const NumberOfCartItems = ctx.items.length;
 return (<Fragment>
        <button className={classes.button}>
        <span className={classes.icon}>
        <CartIcon showCart={props.showCart}/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {NumberOfCartItems}
        </span>
        </button>
        </Fragment>
 )
}
export default HeaderCartButton;