import React, { useContext } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import { CartContext } from './CartContext';


function CartWidget() {
    const { quantity } = useContext(CartContext)

    return (
        <div className="cartWidget">
            { quantity > 0 && 
            <>
            <ShoppingCart/>
            <p>{quantity}</p>
            </>}
        </div>
    )
}

export default CartWidget