import React, { useContext } from 'react';
import { Button, Card } from 'react-materialize';
import { CartContext } from './CartContext';


function CartItem( { id, name, image, price, amount }) {
    const { eliminateFromCart } = useContext(CartContext)

    return (
        <Card>
            <div className="card-title">
                {name}
            </div>
            <div className="card-image">
                <img src={image} alt={name} />
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