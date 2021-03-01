import React from 'react';
import './../styles.css'; 
import logo from './../images/logo.png'
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import { Navbar, Icon, NavItem, Dropdown } from 'react-materialize';

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

/*
     <>
        <header>
            <nav className="home-nav">
                <div className="nav-wrapper">
                <Link to={"/"}><img src={logo} alt="logo"/></Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">Inicio</i></a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <a className="dropdown-trigger" href="#!" data-target="dropdown1">Categorías<i className="material-icons right">arrow_drop_down</i></a>
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
*/

const Header = () => {
    return (
        <Navbar className="home-nav"
        alignLinks="right"
        brand={<Link to={"/"}><img src={logo} alt="logo"/></Link>}
        menuIcon={<Icon>menu</Icon>}
        >

    <NavItem href="#">
    Contacto
     </NavItem>
     <NavItem>
    <ShoppingCart />
     </NavItem>
  <Dropdown
    id="Dropdown_6"
    options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250
    }}
    trigger={<a href="#!">Categorias{' '}<Icon right>arrow_drop_down</Icon></a>}
  >
      { categories.map( category => <Link to={`/category/${category.category}`}>
                    <p>{category.name}</p>
                    </Link>)}
    
  </Dropdown>
        </Navbar>
    )
}

export default Header
