import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
/* 
const productsAPI = [ 
  { 
      id: "0",
      productName: "Sticker Jovenes Nasa VANS InstaMini",
      description: "Tamaños y medidas personalizables",
      price: 200,
      stock: 10,
      initial: 1,
      category: "jovenes",
      productImg: "https://i.pinimg.com/originals/e0/4d/04/e04d0447d760fb60aa12c8df7c44321e.jpg"
  },
  { 
      id: "1",
      productName: "Sticker Navidad Infantil",
      description: "Tamaños y medidas personalizables",
      price: 150,
      stock: 10,
      initial: 1,
      category: "navidad",
      productImg: "https://image.freepik.com/free-vector/snowman-santa-claus-christmas-sticker-collection_52683-27461.jpg"
  },
  { 
      id: "2",
      productName: "sticker2",
      description: "Travel Sticker Collection",
      price: 200,
      stock: 10,
      initial: 1,
      category: "viajar",
      productImg: "https://image.freepik.com/free-vector/hand-drawn-travel-sticker-collection_23-2148063057.jpg"
  },
  { 
      id: "3",
      productName: "Estampitas Paises",
      description: "Tamaños y medidas personalizables",
      price: 200,
      stock: 10,
      initial: 1,
      category: "viajar",
      productImg: "https://image.freepik.com/free-vector/different-retro-tickets-travelers-flat-stamps-set-colorful-baggage-tags-luggage-airplane-stickers-vector-illustration-collection-trip-design-template_74855-8336.jpg"
  },
  { 
      id: "4",
      productName: "Stickers Navidad",
      description: "Tamaños y medidas personalizables",
      price: 200,
      stock: 10,
      initial: 1,
      category: "navidad",
      productImg: "https://image.freepik.com/free-vector/christmas-stickers-with-santa-claus-sweater-pine-tree-snowman-vector-cartoon-icons-set-new-year-decoration-garlands-gift-boxes-candy-cane-cookie-xmas-stocking_107791-4275.jpg"
  },
  {
    id: "5",
    productName: "Stickers Navidad Infantiles",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "navidad",
    productImg: "https://image.freepik.com/free-vector/christmas-animals-decoration-elements-set_52683-27460.jpg"
  },
  {
    id: "6",
    productName: "Mental Health Matters Sticker Arcoiris Unicornio",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "jovenes",
    productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-172.jpg"
  },
  {
    id: "7",
    productName: "Sticker Unicornios",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "jovenes",
    productImg: "https://image.freepik.com/free-vector/set-unicorn-stickers-vector_53876-61444.jpg"
  },
  {
    id: "8",
    productName: "Find Your Happy Place Macaroons Cactus",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "jovenes",
    productImg: "https://image.freepik.com/free-vector/sticker-hand-drawn-doodle-coloring-vector_179234-244.jpg"
  },
  {
    id: "9",
    productName: "Enjoy the Little Things ",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "jovenes",
    productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-173.jpg"
  },
  {
    id: "10",
    productName: "Sticker Ejercicio Just Run",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "ejercicio",
    productImg: "https://image.freepik.com/free-vector/funny-sticker-decorate-photos_52683-23455.jpg"
  },
  {
    id: "11",
    productName: "Sticker Dona Maquina de Escribir",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "jovenes",
    productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-177.jpg"
  },
  {
    id: "12",
    productName: "Cool Stickers",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "jovenes",
    productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-174.jpg"
  },
  {
    id: "13",
    productName: "Chill Polaroid Rubik Cube",
    description: "Tamaños y medidas personalizables",
    price: 200,
    stock: 10,
    initial: 1,
    category: "jovenes",
    productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-176.jpg"
  },
  {
    id: "14",
    productName: "Sticker Postres",
    description: "Tamaños y medidas personalizables",
    price: 250,
    stock: 10,
    initial: 1,
    category: "comida",
    productImg: "https://image.freepik.com/free-vector/set-dessert-fruit-sticker_1308-26315.jpg"
  },
  {
    id: "154",
    productName: "Sticker Piña Pineapple",
    description: "Tamaños y medidas personalizables",
    price: 250,
    stock: 10,
    initial: 1,
    category: "comida",
    productImg: "https://image.freepik.com/free-vector/summer-food-activities-set_74855-6666.jpg"
  },
] */
  
/*   function ItemDetailContainer() {
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            const i = productsAPI.find(product => product.id == id)
            console.log(i)
            resolve(i); 
        }, 2000); })
        promesa.then(result => setItem(result)) 
        promesa.catch(err => console.log("Oops hubo un error")) 

    },  [id]); */

    function ItemDetailContainer() {
      const [ fireItem, setFireItem ] = useState()
      const { id } = useParams()
     
      useEffect(() => {
        const db = firestore
        const collection = db.collection('products') 
        const item = collection.doc(id)
   
        item.get()
         .then( (i) => {
           setFireItem({ id: i.id, ...i.data()})
         })
   
     },  [id]);



    return (
        <>
            { fireItem ?
            <ItemDetail
            item={fireItem}
             id={fireItem.id}
             name={fireItem.productName}     
             price={fireItem.price}
             image={fireItem.productImg}
             description={fireItem.description}
             stock={fireItem.stock}
             initial={fireItem.initial}
             />
             :
             <p>Cargando el sticker seleccionado..</p>}
        </>
    )
}

export default ItemDetailContainer