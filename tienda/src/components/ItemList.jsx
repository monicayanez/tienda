import React from 'react';
import Item from './Item';

function ItemList( { productsAPI } ) {

    return (
        <div className="itemList row">
            { productsAPI.map( product => <Item id={product.id} key={product.id}
            name={product.productName} image={product.productImg} />)
            }
        </div>
    )
}

export default ItemList