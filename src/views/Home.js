import Article from '../components/Article';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Preload from '../components/Preload';
import Restaurant from '../config/Restaurant.json';

import React from 'react'

export default function Home() {
    const articles = Restaurant.products.map((product,x) => {
      return(
        <Article article={ product } key={x} />
      )
    });
    return (
      <div>
        <Preload/>
        <Navigation homeState="active"/>
        <div className="banner header-text">
          <div className="owl-banner owl-carousel">
            <div className="banner-item-01">
              <div className="text-content">
                <h4>Mejores Ofertas</h4>
                <h2>Ofertas que te van a encantar</h2>
              </div>
            </div>
            <div className="banner-item-02">
              <div className="text-content">
                <h4>Ofertas exclusivas</h4>
                <h2>Prueba nuestras mejores recetas</h2>
              </div>
            </div>
            <div className="banner-item-03">
              <div className="text-content">
                <h4>Ofertas de ultima hora</h4>
                <h2>Aprovecha nuestras ofertas</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="latest-products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Mejores Recetas</h2>
                  <a href="/products">Ver todas las recetas <i className="fa fa-angle-right"></i></a>
                </div>
              </div>

              { articles }

            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }

