import React,{Fragment} from "react";
import mealsImage from "../../assets/mealssse.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) =>{
  return(
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton showCart={props.showCart}/>
        </header>
        <div className={classes[`main-image`]}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
  )
}

export default Header;