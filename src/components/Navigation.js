import React from "react";
import Restaurant from '../config/Restaurant.json';

export default function Navigation(props) {
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/"><h2>{ Restaurant.name.substr(0,Restaurant.name.indexOf(' ')) }  <em> { Restaurant.name.substr(Restaurant.name.indexOf(' ')+1) }</em></h2></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className={`nav-item ${ props.homeState }`}>
                                    <a className="nav-link" href="/">Inicio</a>
                                </li> 
                                <li className={`nav-item ${ props.productsState }`}>
                                    <a className="nav-link" href="/products">Nuestras Recetas</a>
                                </li>
                                <li className={`nav-item ${ props.aboutState }`}>
                                    <a className="nav-link" href="/about">Acerca de Nosotros</a>
                                </li>
                                <li className={`nav-item ${ props.contactState }`}>
                                    <a className="nav-link" href="/contact">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
/* export default Navigation; */