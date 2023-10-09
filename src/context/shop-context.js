import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);
const listBeat = JSON.parse(sessionStorage.getItem("listBeat"))

const getDefaultCart = () => {
    if(listBeat === null){
        return;
    }
    let cart = {};
    for(let i = 1; i < listBeat.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
};


function ShopContextProvider({children}) {
    
    const [cartItems, setCartItems] = useState(getDefaultCart); 
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 1}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0}));
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
    };

console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider