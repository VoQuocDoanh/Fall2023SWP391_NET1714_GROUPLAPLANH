import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null);
const listBeat = JSON.parse(sessionStorage.getItem("listBeat"))
console.log(listBeat)
const getDefaultCart = () => {
    if(listBeat === null){
        return;
    }
    let cart = {};
    // for(let i = 1; i < listBeat.length + 1; i++){
    //     cart[i] = 0;
    // }
    for(let i = 1; i < listBeat.length + 1; i++){
    listBeat.forEach(beat => {
        cart[beat.id] = 0
    })};
    return cart;
};


function ShopContextProvider({children}) {
    
    const [cartItems, setCartItems] = useState(getDefaultCart()); 

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                
                let itemInfo = listBeat.find((product) => product.id === Number(item));
                
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 1}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0}));
    }
    const checkOut = () => {
        setCartItems(getDefaultCart());
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        checkOut,
    };

console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider