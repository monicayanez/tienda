import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-materialize';


function ItemCounter({ item, add, substract, agregarAlCarrito, counter, open }) {

    
    return (
        <Card>
                <Button onClick={substract}>-</Button>
                    <h3>{counter}</h3>
                <Button onClick={add}>+</Button>
            { !open ? (<div className="itemCount__agregar">
                <Button onClick={ () => agregarAlCarrito(item)}>
                  <h3>Agregar al Carrito<i className="material-icons">add_shopping_cart</i></h3>
                </Button>
            </div>) : 
            (<Link to="/cart"><Button>
            <h4>Finalizar compra</h4>
          </Button></Link>) }
            
        </Card>
    )
}

export default ItemCounter