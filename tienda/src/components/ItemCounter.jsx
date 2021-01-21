import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize';


function ItemCounter({ item, add, substract, agregarAlCarrito, counter, open }) {

    
    return (
        <div className="counter">
            <>
                <Button onClick={substract}>-</Button>
                    <h6>{counter}</h6>
                <Button onClick={add}>+</Button>
            </>
            <>
            { !open ? (<div className="counter">
                <Button onClick={ () => agregarAlCarrito(item)}>
                  Agregar al Carrito<i className="material-icons">add_shopping_cart</i>
                </Button>
            </div>) : 
            (<Link to="/cart"><Button>
            Confirmar Sticker
          </Button></Link>) }
            </>
        </div>
    )
}

export default ItemCounter