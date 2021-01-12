import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import { Button, Card, Row, Col } from 'react-materialize';


const productsAPI = [ 
  { 
      id: "0",
      productName: "sticker0",
      description: "Tamaños y medidas personalizables",
      price: 200,
      productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-175.jpg"
  },
  { 
      id: "1",
      productName: "sticker1",
      description: "Tamaños y medidas personalizables",
      price: 200,
      productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-170.jpg"
  },
  { 
      id: "2",
      productName: "sticker2",
      description: "Tamaños y medidas personalizables",
      price: 200,
      productImg: "https://image.freepik.com/free-vector/flat-design-hygge-stickers-set_52683-44883.jpg"
  },
  { 
      id: "3",
      productName: "sticker3",
      description: "Tamaños y medidas personalizables",
      price: 200,
      productImg: "https://image.freepik.com/free-vector/sticker-hand-drawn-doodle-coloring-vector_179234-244.jpg"
  },
  { 
      id: "4",
      productName: "sticker4",
      description: "Tamaños y medidas personalizables",
      price: 200,
      productImg: "https://image.freepik.com/free-vector/sticker-icons-hand-drawn-doodle_179234-172.jpg"
  },
]
    
  function ItemDetailContainer() {
      const [ item, setItem ] = useState()
      const { id } = useParams()
  
      useEffect(() => {
          const promesa = new Promise((resolve, reject)=>{
          setTimeout(function(){
              const i = productsAPI.find(product => product.id == id)
              console.log(i)
              resolve(i); 
          }, 2000);
          }
          )
          promesa.then(result => setItem(result)) 
          promesa.catch(err => console.log("Algo salio mal")) 
  
      },  [id]);
 
  return (
    <>
           <div className="itemDetailContainer">
            { item ?
            <ItemDetail
             id={item.id}
             name={item.productName}     
             price={item.price}
             image={item.productImg}
             description={item.description}
             />
            :
            <h2>Cargando productos</h2>}
            </div>
    </>
  )
}

export default ItemDetail;