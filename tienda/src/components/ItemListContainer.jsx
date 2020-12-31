import React , {useState,useEffect} from 'react'

const items = [
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

const ItemListContainer = () => {
    const [qty, qtyItems] = useState(0)

    const addItem = () => { 
        qtyItems(qty + 1)
    }
    const deleteItem = () => {
        qtyItems(qty - 1)
    }
    const restart = () => { 
        qtyItems(0)
    }

    const[item,setItem] = useState()
    useEffect(()=>{
      let promise = new Promise ((res,rej)=>{
        setTimeout(()=>{
            res(items)
        },2000)
      })
    })

    useEffect(()=>{
        console.log("solo al principio")
        fetch (items)
        .then((res) =>{
            return res.json()
        })
        .then((res)=>{
            console.log(res)
        })
    },[])

    useEffect(()=>{
        console.log("solo si qty cambia")
    },[qty])

    const toggle = () => {
        setItem(!item)
    }
    

    return (
        <container> 
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card">
                            <div class="card-image">
                                <img src={productImg} />
                                <span class="card-title">{productName}</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>{description}</p>
                                <p>{price}</p>
                            </div>
                            <p>Cantidad de artículos {qty}</p>
                            <button onClick={addItem}>+</button>
                            <button onClick={deleteItem}>-</button>
                            <button onClick={restart}>Eliminar articulos</button>
                            <div>
                                <button onClick={toggle}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </container>      
    )
}

export default ItemListContainer
