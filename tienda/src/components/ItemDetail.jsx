import React from 'react';
import { Button, Card } from 'react-materialize';


function ItemDetail( { name, image, description, price }) {
    
    return (
        <Card>
        <Card className="card-image">
            <img src={image}/>
            <span className="card-title">{name}</span>
        </Card>
        <div className="card-content">
            <p>{description}</p>
            <p>{price}</p>
            <Button>
            <a class="btn-floating halfway-fab waves-effect waves-light shop-cart"><i class="material-icons">add_shopping_cart</i></a>
            </Button>
        </div>
    </Card>
           )
}

export default ItemDetail