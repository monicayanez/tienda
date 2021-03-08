import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-materialize';


function Item({ id, name, image }) {
   
    return (   
            <Card className="col s4">
                <Card className="card-image">
                    <img src={image}/>
                    <span className="card-title">{name}</span>
{/*                     <a className="btn-floating halfway-fab waves-effect waves-light shop-cart"><i className="material-icons">add_shopping_cart</i></a>
 */}                </Card>
                <div className="card-content">
                    <Button size="small" color="primary">
                    <Link to={"/item/" + id}>Ver Detalle</Link>
                    </Button>
                </div>
            </Card>
  
  
        )
}

export default Item