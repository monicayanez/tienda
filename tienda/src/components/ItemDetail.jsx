import React, { useState, useParams, useEffect } from 'react';
import { Button, Card } from 'react-materialize';
import ItemCounter from './ItemCounter';

function ItemDetail( { item, id, productName, productImg, description, price, stock, initial }) {

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
            <img src={productImg}/>
            <span className="card-title">{productName}</span>
        </Card>
        <div className="card-content">
            <p>{description}</p>
            <p>{price}</p>
            <Button>
            <a className="btn-floating halfway-fab waves-effect waves-light shop-cart">
                <i className="material-icons">add_shopping_cart</i></a>
            </Button>
            <div>
            <ItemCounter initial={initial} stock={stock} add={add} substract={substract}
            agregarAlCarrito={agregarAlCarrito} item={item} counter={counter} open={open}/>
          </div>
        </div>
    </Card>
           )
}

export default ItemDetail