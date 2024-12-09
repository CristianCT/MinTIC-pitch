import Preload from '../components/Preload';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Restaurant from '../config/Restaurant.json';

import React from 'react'

export default function Contact() {

        const accordion = Restaurant.questions.map((question,x) => {

            return (
                <li>
                    <a href="/" >{ question.title }</a>
                    <div className="content">
                        <p>{ question.answer }</p>
                    </div>
                </li>
            );
        });
        return (
            <div>
                <Preload/>
                <Navigation contactState="active"/>
                <div className="page-heading contact-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>Contactanos</h4>
                                    <h2>Atendemos tus inquietudes</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="find-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Ubicanos en el mapa</h2>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div id="map">
                                    
                                    <iframe title="Ubication" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.105573484412!2d-75.49809868553436!3d10.41318926864123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI0JzQ3LjUiTiA3NcKwMjknNDUuMyJX!5e0!3m2!1ses!2sco!4v1624673010849!5m2!1ses!2sco" width="100%" height="330px" frameBorder="0" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="left-content">
                                    <h4>Nuestra Sede Principal</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
                                    <ul className="social-icons">
                                        <li><a href={ Restaurant.facebook } target="blank"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href={ Restaurant.twitter } target="blank"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href={ Restaurant.instagram } target="blank"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href={ Restaurant.youtube } target="blank"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href={ Restaurant.whatsapp } target="blank"><i className="fa fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="send-message">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Mandanos un mensaje</h2>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="contact-form">
                                    <form id="contact" action={ `mailto:${ Restaurant.email }` } method="post">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <fieldset>
                                                    <input name="name" type="text" className="form-control" id="name" placeholder="Nombre completo" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <fieldset>
                                                    <input name="email" type="text" className="form-control" id="email" placeholder="E-Mail" required />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Comentario/Descripción" required ></textarea>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="filled-button">Enviar mensaje</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <ul className="accordion">
                                    { accordion }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }