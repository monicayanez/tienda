import React from 'react';
import { Link } from 'react-router-dom';


function ShoppingCart() {
    return (
      <>
           <Link to="/cart">
           <i className="material-icons">shopping_cart</i>
          </Link>
            
       </>
    )
}

export default ShoppingCart