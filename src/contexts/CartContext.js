import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from './UserContext';

export const CartContexts = createContext();


// get cart from localStorage
const storedCart = () => {
    let cart = localStorage.getItem("shopping-cart");
    return cart ? JSON.parse(cart) : [];
}

const CartContext = ({children}) => {
    const {user} = useContext(AuthContext);
    let [cartItems, setCartItems] = useState(storedCart);
    const [totalAmount, setTotalAmount] = useState(0);

    // add data to local storage
    useEffect( () => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    } , [cartItems]);
    
    const addToCart = ({id, images,title,price, brand, stock}, quantity) => {
        if(!user.email){
            return;
        };
        let shoppingCart = {id, title, images,price,quantity,brand, stock};

        setCartItems([...cartItems, shoppingCart]);
        toast.success("Product Added😍")
    };

    // existing product qunatity increament
    const incQuantity = (id, stock) => {
        let updatedQuantity = cartItems.map( (curElem) => {

            if(curElem.id === id){
                if(curElem.quantity === stock){
                    return curElem;
                };

                let decQuantity = curElem.quantity + 1;
                return {
                    ...curElem,
                    quantity : decQuantity
                };
            }
            else{
                return curElem;
            };
        });
        return setCartItems(updatedQuantity);
    };

    // existing product qunatity decreament
    const decQuantity = (id) => {
        let updatedQuantity = cartItems.map( (curElem) => {

            if(curElem.id === id){
                if(curElem.quantity === 1){
                    return curElem;
                };
                let decQuantity = curElem.quantity - 1;
                return {
                    ...curElem,
                    quantity : decQuantity
                };
            }
            else{
                return curElem;
            };
        });
        return setCartItems(updatedQuantity);
    };

    // remove specific item in cart
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        toast.warning("Product Removed😊")
    };

    // clear all the cart items
    const clearCart = () => {
        setCartItems([]);
    }


    const cartAction = {cartItems, addToCart, removeFromCart, incQuantity, decQuantity, clearCart, setTotalAmount, totalAmount};
    return (
        <CartContexts.Provider value={cartAction}>
            {children}
        </CartContexts.Provider>
    );
};

export default CartContext;