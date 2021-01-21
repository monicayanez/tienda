import React, { useContext } from 'react';
import { Button, Card } from 'react-materialize';
import { CartContext } from './CartContext';


function CartItem( { id, productName, productImg, price, amount }) {
    const { eliminateFromCart } = useContext(CartContext)

    return (
        <Card>
            <div className="card-title">
                {productName}
            </div>
            <div className="card-title">
                <img src={productImg} alt={productName} />
            </div>
            <div className="card-content">
                <p>${price}</p>
            </div>
            <div className="card-content">
                <p>{amount}</p>
            </div>
            <div className="card-content">
                <p>${amount*price}</p>
            </div>
            <Button onClick={() => eliminateFromCart(id)}>
                X
            </Button>
        </Card>
    )
}

export default CartItem