import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const ProductItem = props => {
    const {item} = props
    const {Name, Cost, InStock, Manufacturer, id, image} = item
        return (
        <Link to={`/productdetails/${id}`} className="item-Link">
            <li className="product-item">
              <img src={image} alt="product" className="thumbnail"/>
              <h1 className="title">{Name}</h1>
              <p className="brand">by {Manufacturer}</p>
              <div className="product-details">
                <p className="price">Rs {Cost}/-</p>
                <p className={InStock ? 'in-stock' : 'not-in-stock'}>{InStock ? 'In Stock' : 'Not In Stock'}</p>
              </div>
            </li>
          </Link>
        )
    
}

export default ProductItem

