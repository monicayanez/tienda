import React, { useState, useContext } from 'react';
import { Button, Card } from 'react-materialize';
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import { CartContext } from './CartContext';


function ItemDetail( { item, description, price, initial, stock }) {

    const [ counter, setCounter ] = useState(initial)
    const [ open, setOpen ] = useState(false)
    const { addToCart } = useContext(CartContext)
    
    function add(){
        if (counter < stock ){
            setCounter(counter+1)
        }
    }
    function substract() {
        if (counter > initial ){
            setCounter(counter-1)
        }
    }

    function agregarAlCarrito (product) {
        addToCart(product, counter)
        setOpen(true)
    }



    return (
        <Card>
        <Card className="card-image">
            <img src={item.productImg}/>
            <span className="card-title">{item.productName}</span>
        </Card>
        <div className="card-content">
            <p>{description}</p>
            <p>${price}</p>
           
            <div>
            <ItemCounter initial={initial} stock={stock} add={add} substract={substract}
            agregarAlCarrito={agregarAlCarrito} item={item} counter={counter} open={open}/>
          </div>
          
        </div>
    </Card>

           )
}

export default ItemDetail