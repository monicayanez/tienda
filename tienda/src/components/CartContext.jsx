import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext();

function CartProvider( { children }) {
    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()

    useEffect(() => {
        var total = 0
        const totals = cart.map( p => p.price * p.amount)
        totals.map( p => total = total + p)
        setTotal(total)

        const cartQuantity = cart.length
        setQuantity(cartQuantity)
    }, [cart])


    function isInCart(id){
        const item = cart.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }


    function addToCart(product, counter) {
         
        if (isInCart(product.id)){
        
            const oldProduct = cart.find(p => p.id === product.id)
            const newQuantity = oldProduct.amount + counter           
            const newProduct = { id: oldProduct.id, name: oldProduct.productName, image: oldProduct.productImg, price: oldProduct.price, amount: newQuantity}
    
            const cartWithoutOld = cart.filter(product => product.id =! product.id)
         
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)  

        } else {
            const newItem = { id: product.id, name: product.productName, image: product.productImg, price: product.price, amount: counter }
            setCart([...cart, newItem]) 
        }
    }

    function eliminateFromCart(id){
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }

    function clearCart(){
        setCart([])
        setQuantity(0)
    }


    return (
            <CartContext.Provider value ={{ cart, quantity, total, addToCart, eliminateFromCart, clearCart }}>
                { children }
            </CartContext.Provider>
    )
}

export default CartProvider;