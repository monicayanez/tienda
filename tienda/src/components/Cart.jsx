import { Button, Card } from 'react-materialize';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem';


function Cart() {
    const { cart, clearCart, total } = useContext(CartContext)

    return (
        <div className="collection">
            { cart.length > 0 ? (
            <p>Confirmar compra</p>
            )    
            :
            ( <>
            <p>Tu carrito aún se encuentra vacío</p>
                <Link to={"/"}>
                <Button onClick={clearCart}>
                   Mostrar stickers
                </Button>
            </Link>
            </>)}
            <div className="collection-item">
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <p>${total}</p>
            <div>
                <Button onClick={clearCart}>
                    Eliminar todos los items
                </Button>
                <Button onClick={() => {console.log(cart)}}>
                   Proceder al pago
                </Button>
            </div>
            </>}
        </div>
    )
}

export default Cart