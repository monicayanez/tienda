import React, { useState, useParams, useEffect } from 'react';
import { Button, Card } from 'react-materialize';
import ItemCounter from './ItemCounter';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

function ItemDetail( { item, productsAPI, productImg, productName, description, price, initial, stock }) {

    const [ counter, setCounter ] = useState(initial)
    const [ cart, setCart ] = useState([])
    const [ open, setOpen ] = useState(false)
    
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
        setCart(...cart, { id: product.id, name: product.productName, image: product.productImg, amount: counter })
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