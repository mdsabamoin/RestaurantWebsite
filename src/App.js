import React,{Fragment,useState} from "react";
// import logo from './logo.svg';
// import classes from './App.css';
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/meals.js";
function App() {
 
  const[IsCart,setIsCart] = useState(false);
   
  const showCart = ()=>{
    setIsCart(true);
  }
  const HideCart = ()=>{
    setIsCart(false);
  }
  return (<Fragment>
    {IsCart && <Cart HideCart={HideCart}/>}
    <Header showCart={showCart}/>
    <main>
    <Meals/>
    </main>
    
  </Fragment>
  );
}

export default App;
