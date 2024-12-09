import React from 'react'

export default function TeamMember(props) {

        return (
            <div className="col-md-4">
                <div className="team-member">
                    <div className="thumb-container">
                        <img src={ props.member.img } alt=""/>
                        <div className="hover-effect">
                            <div className="hover-content">
                                <ul className="social-icons">
                                    <li><a href={ props.member.facebook } target="blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href={ props.member.twitter } target="blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href={ props.member.instagram } target="blank"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href={ props.member.whatsapp } target="blank"><i className="fa fa-whatsapp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="down-content">
                        <h4>{ props.member.name }</h4>
                        <span>{ props.member.rol }</span>
                        <p>{ props.member.description }</p>
                    </div>
                </div>
            </div>
        );
    }
