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
//  console.log(itemArr);
const removeItemFromCartHandler = (id) =>{
  console.log(id);
  const arr =[...itemArr];
  for(let i=0;i<arr.length;i++){
    if(arr[i].props.id === id){
      arr.splice(i,1);
      setItemArr(arr);
    }
  }
   
};


  const cartContext = {
    items:itemArr,
    totalAmount:0,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
  }

 return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;