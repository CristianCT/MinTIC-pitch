import Navigation from '../components/Navigation';
import Preload from '../components/Preload';
import Article from '../components/Article';
import Footer from '../components/Footer';
import Restaurant from '../config/Restaurant.json';

import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        const articles = Restaurant.products.map((product,x) => {
            return(
              <Article article={ product } />
            )
        });
        return (
            <div>
                <Preload/>
                <Navigation productsState="active"/>
                <div className="page-heading products-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>Nuestras Recetas</h4>
                                    <h2>Conoce todas las recetas</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products">
                    <div className="container">
                        <div className="row">

                            { articles }
                            
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}