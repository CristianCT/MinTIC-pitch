import React, { Component } from 'react'

export default class article extends Component {
  render() {
    
    return (
      <div className="col-md-4">
        <div className="product-item">
            <a href="/"><img src={ this.props.article.img } alt="preview"/></a>
            <div className="down-content">
                <a href="/"><h4>{ this.props.article.name }</h4></a>
                <h6>${ this.props.article.price }</h6>
                <p>{ this.props.article.description }</p>
                <ul className="stars">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Vista por ({this.props.article.reviews})</span>
            </div>
        </div>
      </div>
    );
  }
}
