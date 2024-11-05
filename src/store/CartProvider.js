import React ,{useState}from "react";
import CartContext from "./cart-context";


const CartProvider = (props)=>{
  
  const [itemArr,setItemArr] = useState([]);
    
 const addItemToCartHandler = (item)=>{
   if(!itemArr.some((itemOfsome)=>itemOfsome.props.id === item.props.id)){
    setItemArr((previousState)=>{
      return[item,...previousState];
    })
   }
 };
const removeItemFromCartHandler = (id) =>{};


  const cartContext = {
    items:itemArr,
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
  }

 return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;