import Restaurant from '../config/Restaurant.json';

import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-content">
                                <p>Copyright &copy; 2021 { Restaurant.name }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}