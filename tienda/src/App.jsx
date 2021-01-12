

import React , { useState, useEffect } from 'react';
import './styles.css'; 
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer.jsx';


const productsAPI = [ 
    { 
        id: "0",
        productName: "sticker0",
        description: "Tamaños y medidas personalizables",
        price: 200,
        productImg: "https://i.pinimg.com/originals/e0/4d/04/e04d0447d760fb60aa12c8df7c44321e.jpg"
    },
    { 
        id: "1",
        productName: "sticker1",
        description: "Tamaños y medidas personalizables",
        price: 200,
        productImg: "https://i.pinimg.com/originals/e0/4d/04/e04d0447d760fb60aa12c8df7c44321e.jpg"
    },
    { 
        id: "2",
        productName: "sticker2",
        description: "Tamaños y medidas personalizables",
        price: 200,
        productImg: "https://i.pinimg.com/originals/e0/4d/04/e04d0447d760fb60aa12c8df7c44321e.jpg"
    },
    { 
        id: "3",
        productName: "sticker3",
        description: "Tamaños y medidas personalizables",
        price: 200,
        productImg: "https://i.pinimg.com/originals/e0/4d/04/e04d0447d760fb60aa12c8df7c44321e.jpg"
    },
    { 
        id: "4",
        productName: "sticker4",
        description: "Tamaños y medidas personalizables",
        price: 200,
        productImg: "https://i.pinimg.com/originals/e0/4d/04/e04d0447d760fb60aa12c8df7c44321e.jpg"
    },
]

export default function App() {
      
    const [ items, setItems ] = useState([])

    useEffect(() => {
      const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
          resolve(productsAPI); 
        }, 2000);
      }
      )
      promesa.then( result => setItems(result)) 
      promesa.catch( err => console.log("Algo salio mal")) 
  
    }, []);

return (
    <>
   <Header/>
   {items.map(product => <ItemListContainer id={product.id} nombre={product.productName} precio={product.price} imagen={product.productImg} descripcion={product.description} /> )} 

    </>
  );
}
