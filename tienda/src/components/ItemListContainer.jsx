import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

function ItemListContainer ({id, productName, description, price, productImg}) {

 
  return (
    <>
    <div class="row">
        <div class="col s12 m6" id={id}>
            <div class="card">
                <div class="card-image">
                <img src={productImg}/>
                <span class="card-title">{productName}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                </div>
                <div class="card-content">
                <p>{description}</p>
                <p>{price}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemListContainer    