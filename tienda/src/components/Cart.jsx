import { Button, Card } from 'react-materialize';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem';
import {firestore} from "./firebase";
import firebase from 'firebase/app';


function Cart() {
    const { cart, clearCart, total } = useContext(CartContext)
    const [ openPay, setOpenPay ] = useState(false)
    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ email, setEmail ] = useState("")

    const classes = useStyles();

    function submitOrder(){
        const db = firestore
        const orders = db.collection('orders')
        const order = {
            buyer: { name: name, phone: phone, email: email},
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        }
        orders.add(order)
        .then(({ id }) => alert("Guarda el ID de tu compra" + id))
        .catch((error) => console.log(error))
    }

    return (
        <div className="collection">
        { cart.length > 0 ? (
        <p>Confirmar compra</p>
        )    
        :
        ( <>
        <p>Tu carrito aún se encuentra vacío</p>
            <Link to={"/"}>
            <Button onClick={clearCart}>
               Mostrar stickers
            </Button>
        </Link>
        </>)}
        <div className="collection-item">
            { cart.length > 0 && cart.map( product => {
               console.log(product)
               return( <CartItem key={product.id} 
                    id={product.id} name={product.name} image={product.image} price={product.price} 
                    amount={product.amount} />)
           } )}
        </div>


        { cart.length > 0 &&
        <>
        <p>${total}</p>
        <div className="collection">
            <Button onClick={clearCart}>
                Eliminar todos los items
            </Button>
            <Button onClick={() => {console.log(cart)}}>
               Proceder al pago
            </Button>
            <Link to="/"><Button>
        Regresar
      </Button></Link>
        </div>
        </>}

            { openPay && 
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" value={name} 
            onChange={(e) => setName(e.target.value)} />
            <TextField id="standard-basic" label="Telephone" value={phone} 
            onChange={(e) => setPhone(e.target.value)} />
            <TextField id="standard-basic" label="Email" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={submitOrder} variant="contained" color="primary">
                    Sí!
                </Button>
          </form>}


        </div>
    )
}

export default Cart