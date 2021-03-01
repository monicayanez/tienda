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
        <Card className="col s4">
            <Card className="card-image">
                <img src={item.productImg}/>
                <span className="card-title">{item.productName}</span>
            </Card>
            <ul class="collection item-detail-collection">
                <li class="collection-item"><p>{description}</p></li>
                <li class="collection-item"> <p>Precio por unidad ${price}</p></li>
            </ul> 
                <ItemCounter initial={initial} stock={stock} add={add} substract={substract}
                agregarAlCarrito={agregarAlCarrito} item={item} counter={counter} open={open}/>
           
          </Card>
       
   

           )
}

export default ItemDetail