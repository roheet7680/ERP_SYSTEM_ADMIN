import React, { Component } from 'react'

import './index.css'
import ProductItem from '../ProductItem';
import ProductContext from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import SideNavbar from '../SideNavbar';

class Product extends Component {
    state = {
        filteredProducts: null // Initially, the filteredProducts state is null
      };
    
      onSearchFilter = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const { productsList } = this.context;
        const filteredProducts = productsList.productsList.filter(product =>
          product.Name.toLowerCase().includes(searchValue)
        );
        this.setState({ filteredProducts }); // Update the state with filtered products
      }

    render(){

        const { filteredProducts } = this.state;
    const { productsList } = this.context;
    console.log(productsList)
    const productsToRender = filteredProducts || productsList.productsList; // Use filteredProducts if available, otherwise use the original list

    return (
        <div className='common-container'>
          <SideNavbar />
          <div className='products-container'>
            <h1 className='products-heading'>Products</h1>
            <div className='products-sub-container'>
              <div className='products-top-container'>
                <Link to='/addproduct'><button className='create-product-btn'>Create new</button></Link>
                <input onChange={this.onSearchFilter} className='search-filter' type='search' placeholder='Search...' />
              </div>
  
              {productsToRender.length === 0 ? (
                <div className='empty-container'>
                <img className='no-orders-image' src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-7416.jpg?w=740&t=st=1710435451~exp=1710436051~hmac=00a264657cd707e8fa2f40e3fb47d2c0a65303cf667791e98db8f46c282d4dae" alt='no orders'/>
                <h1 className='empty-heading'>No Products To List</h1>
             </div>
              ) : (
                <ul className='products-bottom-container'>
                  {productsToRender.map(each => (
                    <ProductItem item={each} key={each.id} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      );


    //     return (
    //         <ProductContext.Consumer>
    //   {value => {
    //     const {productsList} = value
    //     return (
    //         <div className='common-container'>
    //         <SideNavbar />
    //             <div className='products-container'>
    //                 <h1 className='products-heading'>Products</h1>
    //                 <div className='products-sub-container'>
    //                     <div className='products-top-container'>
    //                         <Link to='/addproduct'><button className='create-product-btn'>Create new</button></Link>
    //                         <input className='search-filter' type='search' placeholder='Search...' />
    //                     </div>
    //                     {/* <div className='filter-container'>
    //                         <div className='filter-right-container'>
    //                             <select>
    //                                 <option>All Category</option>
    //                             </select>
    //                             <select>
    //                                 <option>Latest Added</option>
    //                             </select>
    //                         </div>
    //                     </div> */}
            
    //                     <ul className='products-bottom-container'>
    //                         {productsList.productsList.map(each => (
    //                             <ProductItem item={each} key={each.id} />
    //                         ))}
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     )

    //   }}
    // </ProductContext.Consumer>
    //       )
    }
}

Product.contextType = ProductContext;

export default Product
