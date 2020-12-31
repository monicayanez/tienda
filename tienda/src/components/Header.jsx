import React from 'react'

const Header = () => {
    return (
        <>
        <header>
            <nav class="home-nav">
                <div class="nav-wrapper">
                <a href="#!" class="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">Inicio</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">¿Cómo funciona?</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Carrito</a></li>
                </ul>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header
