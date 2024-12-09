import Navigation from '../components/Navigation';
import Preload from '../components/Preload';
import TeamMember from '../components/TeamMember';
import Footer from '../components/Footer';
import Restaurant from '../config/Restaurant.json';

import React from 'react'

export default function About() {
        const teamMembers = Restaurant.team.map((member, x) => {
            return (
                <TeamMember member={ member } key={x} />
            );
        });
        return (
            <div>
                <Preload/>
                <Navigation aboutState="active"/>
                <div className="page-heading about-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content">
                                    <h4>Acerca de nosotros</h4>
                                    <h2>Conocenos mejor</h2>
                                    {/* <a href='https://es.pngtree.com/free-backgrounds'>fotos de fondo gratis de es.pngtree.com</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="best-features about-features">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Nuestra compañia</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-image">
                                    <img src="assets/images/feature-image.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <h4>¿Quienes somos y Que hacemos?</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
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

                <div className="team-members">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h2>Nuestro Equipo de Trabajo</h2>
                                </div>
                            </div>
                            
                            { teamMembers }

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
