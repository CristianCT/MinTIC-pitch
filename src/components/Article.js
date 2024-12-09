import React from 'react'

export default function article(props) {
    
    return (
      <div className="col-md-4">
        <div className="product-item">
            <a href="/"><img src={ props.article.img } alt="preview"/></a>
            <div className="down-content">
                <a href="/"><h4>{ props.article.name }</h4></a>
                <h6>${ props.article.price }</h6>
                <p>{ props.article.description }</p>
                <ul className="stars">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Vista por ({props.article.reviews})</span>
            </div>
        </div>
      </div>
    );
  }

