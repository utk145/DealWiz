"use client"

import { useRouter } from "next/navigation"
import { createContext, useContext, useState } from "react"

const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter();

    const [isItemAdded, setIsItemAdded] = useState(false);

    const getCart = () => {
        let cart = [];
        if (typeof localStorage !== 'undefined') {
            cart = JSON.parse(localStorage.getItem("cart")) || []
        }
        return cart;
    };

    const addToCart = (product) => {
        let cart = [];
        if (typeof localStorage !== 'undefined') {
            cart = JSON.parse(localStorage.getItem("cart")) || []
        }
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        isItemAddedToCart(product)
        router.refresh()
    };

    const removeFromCart = (product) => {
        let cart = [];
        if (typeof localStorage !== 'undefined') {
            cart = JSON.parse(localStorage.getItem("cart")) || []
        };

        cart = cart.filter(item => item.id !== product.id)
        localStorage.setItem("cart", JSON.stringify(cart))
        isItemAddedToCart(product)
        router.refresh()
    };

    const isItemAddedToCart = (product) => {
        let cart = [];
        if (typeof localStorage !== 'undefined') {
            cart = JSON.parse(localStorage.getItem("cart")) || []
        };
        cart = cart.filter(item => item.id === product.id)
        if (cart.length > 0) {
            setIsItemAdded(true);
            return;
        }
        setIsItemAdded(false);
    };

    const cartCount = () => {
        let cart = []
        if (typeof localStorage !== 'undefined') {
            cart = JSON.parse(localStorage.getItem("cart")) || []
        };
        return cart.length;
    };

    const cartTotal = () => {
        let cart = [], total = 0;
        if (typeof localStorage !== 'undefined') {
            cart = JSON.parse(localStorage.getItem("cart")) || []
        };

        for (let index = 0; index < cart.length; index++) {
            total += cart[index]?.price;
        }

        return total;
    };

    const clearCart = () => {
        localStorage.removeItem("cart")
        router.refresh();
    }




    const exposed = { removeFromCart, addToCart, getCart, isItemAdded, clearCart, cartTotal, cartCount, isItemAddedToCart };
    return <Context.Provider value={exposed}>{children}</Context.Provider>
}


export const useCart = () => useContext(Context);
export default Provider;