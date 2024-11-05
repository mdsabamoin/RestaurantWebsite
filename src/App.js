import React,{useState} from "react";
// import logo from './logo.svg';
// import classes from './App.css';
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/meals.js";
import CartProvider from "./store/CartProvider.js";
function App() {
 
  const[IsCart,setIsCart] = useState(false);
   
  const showCart = ()=>{
    setIsCart(true);
  }
  const HideCart = ()=>{
    setIsCart(false);
  }
  return (<CartProvider>
    {IsCart && <Cart HideCart={HideCart}/>}
    <Header showCart={showCart}/>
    <main>
    <Meals/>
    </main>
    
  </CartProvider>
  );
}

export default App;
