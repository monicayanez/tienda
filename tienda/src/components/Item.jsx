import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-materialize';


function Item({ id, name, image }) {
   
    return (   
            <Card>
                <Card className="card-image">
                    <img src={image}/>
                    <span class="card-title">{name}</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light shop-cart"><i class="material-icons">add_shopping_cart</i></a>
                </Card>
                <div className="card-content">
                    <Button size="small" color="primary">
                    <Link to={"/item/" + id}>Ver Detalle</Link>
                    </Button>
                </div>
            </Card>
  
  
        )
}

export default Item