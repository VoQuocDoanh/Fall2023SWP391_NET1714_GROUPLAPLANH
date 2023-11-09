import React, { createContext, useEffect, useState } from 'react'
export const ShopContext = createContext(null);



function ShopContextProvider({ children }) {
    const [listBeatContext, setListBeatContext] = useState([]);
    const [viewBeatFirstTime, setViewBeatFirstTime] = useState(0);
    const [countCart, setCountCart] = useState(0);
    const [checkOutPage, setCheckOutPage] = useState(true)
    let count = 0
    const getDefaultCart = () => {
        if (!listBeatContext) {
            return;
        }
        let cart = {};
        // for(let i = 1; i < listBeat.length + 1; i++){
        //     cart[i] = 0;
        // }
        for (let i = 1; i < listBeatContext.length + 1; i++) {
            listBeatContext.forEach(beat => {
                cart[beat.id] = 0
            })
        };
        return cart;
    };
    
    const [cartItems, setCartItems] = useState(getDefaultCart());
    // if(JSON.parse(localStorage.getItem("Cart")) !== null &&  ){

    // }

    
    if (localStorage.getItem("CheckOutPage") !== null) {
        // console.log(JSON.parse(localStorage.getItem("Cart")))
        // console.log(JSON.parse(localStorage.getItem("CheckOutPage")))
        // console.log(cartItems)
        if (JSON.parse(localStorage.getItem("CheckOutPage")).includes("true")) {
            console.log(JSON.parse(localStorage.getItem("Cart")))
            setCartItems(JSON.parse(localStorage.getItem("Cart")))
            localStorage.setItem("CheckOutPage", JSON.stringify("false"))
        }
    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("CheckOutPage")).includes("false")) {
            // console.log(JSON.parse(localStorage.getItem("Cart")))
            // console.log(cartItems)
            localStorage.setItem("Cart", JSON.stringify(cartItems))

        }
        console.log(cartItems)
        count = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                count = count + 1
            }
        }
        setCountCart(count)
    }, [cartItems])
    const setDefaultCart = () => {
        setCartItems(getDefaultCart());
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                let itemInfo = listBeatContext.find((product) => product.id === Number(item));

                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        setCheckOutPage(false)

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
        setCheckOutPage(false)
    }
    const checkOut = () => {
        setCartItems(getDefaultCart());
        localStorage.removeItem("Cart")
        setCountCart(0)
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        checkOut,
        setListBeatContext,
        listBeatContext,
        setDefaultCart,
        viewBeatFirstTime,
        setViewBeatFirstTime,
        countCart,
    };
    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider