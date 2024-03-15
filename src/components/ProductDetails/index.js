import React, { useContext } from 'react';
import SideNavbar from '../SideNavbar';
import ProductContext from '../../context/ProductContext';
import './index.css';
import { useParams } from 'react-router-dom'; // Import useParams hook

function ProductDetails() {
    const { productsList } = useContext(ProductContext);
    const { id } = useParams(); 

    const productDetailsList = productsList.productsList.filter(product => (product.id == id));
    const productDetails = productDetailsList[0]
    console.log(productDetails)

    return (
        <div className='common-container'>
            <SideNavbar />
            <div className='product-details-container'>
                <div className='img-container'>
                    <img className='product-details-img' src={productDetails.image} alt='details' />
                </div>

                <div className='product-details-content'>
                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Name </label>
                        </div>
                        <p>{productDetails.Name}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Cost </label>
                        </div>
                        <p>{productDetails.Cost}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Model </label>
                        </div>
                        <p>{productDetails.Model}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>Manufactured By </label>
                        </div>
                        <p>{productDetails.Manufacturer}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>InStock </label>
                        </div>
                        <p className={productDetails.InStock ? 'in-stock' : 'not-in-stock'}>{productDetails.InStock ? 'In Stock' : 'Not In Stock'}</p>
                    </div>

                    <div className='each-row-details'>
                        <div className='each-row-label'>
                            <label>ReleaseYear </label>
                        </div>
                        <p>{productDetails.ReleaseYear}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
