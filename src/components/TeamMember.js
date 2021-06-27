import React, { Component } from 'react'

export default class TeamMember extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="team-member">
                    <div className="thumb-container">
                        <img src={ this.props.member.img } alt=""/>
                        <div className="hover-effect">
                            <div className="hover-content">
                                <ul className="social-icons">
                                    <li><a href={ this.props.member.facebook } target="blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href={ this.props.member.twitter } target="blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href={ this.props.member.instagram } target="blank"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href={ this.props.member.whatsapp } target="blank"><i className="fa fa-whatsapp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="down-content">
                        <h4>{ this.props.member.name }</h4>
                        <span>{ this.props.member.rol }</span>
                        <p>{ this.props.member.description }</p>
                    </div>
                </div>
            </div>
        );
    }
}
