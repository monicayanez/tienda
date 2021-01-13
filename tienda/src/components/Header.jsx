import React from 'react';
import './../styles.css'; 
import logo from './../images/logo.png'
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

const categories = [
{
    category: "jovenes",
    name: "Jóvenes"
},
{
    category: "navidad",
    name: "Navidad"
},
{
    category: "viajar",
    name: "Viajar"
},
{
    category: "ejercicio",
    name: "Ejercicio"
},
{
    category: "comida",
    name: "Comida"
}
]


const Header = () => {
    return (
        <>
        <header>
            <nav className="home-nav">
                <div className="nav-wrapper">
                <Link to={"/"}><img src={logo} alt="logo"/></Link>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">Inicio</i></a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a className="dropdown-trigger" href="#!" data-target="dropdown1">Categorías<i class="material-icons right">arrow_drop_down</i></a>
                        <ul id="dropdown1" className="dropdown-content">
                        <li>{ categories.map( category => <Link to={`/category/${category.category}`}>
                    <p>{category.name}</p>
                    </Link>)}</li>
                        </ul></li>
                    <li><a href="#">Contacto</a></li>
                    <li><ShoppingCart/></li>
                </ul>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header
