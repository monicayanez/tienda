import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestore } from '.firebase';


function ItemListContainer({ details, productsAPI }) {
    const [ items, setItems ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if(id){
            const db = firestore
            const collection = db.collection('products')
            const query = collection.where('category',"==",id).get()
            query
            .then((result) => {
                setItems(result.docs.map(p => ({id: p.id, ...p.data()})))
              })
              .catch((error) => {
                console.log(error)
              })
        }
        else{
            setItems(productsAPI)
        }     

    }, [id, productsAPI])
/* function ItemListContainer({ details, productsAPI }) {
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
 */
    return (
        <>
            <h2>{details}</h2>
            {productsAPI.length > 1 ? <ItemList productsAPI={items} /> : <p>Cargando stickers...</p>}           
        </>
    )
}

export default ItemListContainer