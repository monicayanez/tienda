import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ details, productsAPI }) {
    const [ items, setItems ] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if(id){
            const category = productsAPI.filter(product => product.category == id)
            setItems(category)
        }
        else{
            setItems(productsAPI)
        }

    }, [id, productsAPI])

    return (
        <>
            <h2>{details}</h2>
            {productsAPI.length > 1 ? <ItemList productsAPI={items} /> : <h2>Cargando Stickers</h2>}           
        </>
    )
}

export default ItemListContainer