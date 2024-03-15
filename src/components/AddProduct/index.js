import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';
import SideNavbar from '../SideNavbar';

import './index.css'

const AddProduct = () => {
  const history = useNavigate();
  const { addNewProduct } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    stockAvailability: '',
    model: '',
    manufacturedBy: '',
    releaseYear: '',
    Category: ''
  });

 const { name,price, description, stockAvailability, model, manufacturedBy, releaseYear, Category } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming addNewProduct is an asynchronous function
    // const { mobileName, price, description, stackCount, model, manufacturedBy, releaseYear } = formData;
    // console.log(formData)

    console.log(formData)

    await addNewProduct(name,price,description, stockAvailability, model, manufacturedBy, releaseYear, Category);
    // Navigate to the products page after form submission
    history('/products');
  };

  const clearData = () => {
    console.log('entered')
    setFormData({
      name: '',
      price: '',
      description: '',
      stockAvailability: '',
      model: '',
      manufacturedBy: '',
      releaseYear: '',
      Category: ''
    });
    console.log(formData)
  };

  return (
    <div className='common-container'>
        <SideNavbar />
        <div className='add-product-container'>
            <div className='add-product-top-container'>
            <h1 className="add-book-heading">Add New Product</h1>
            <Link to='/' className='add-link-item'><button className='back-button'>Back to Home</button></Link>
            </div>
            <form className="sell-book-form" onSubmit={handleSubmit}>
              <label htmlFor="titleInput" className="sell-label">
                Name: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={handleChange} name='name' value={name}
              />
              <label htmlFor="titleInput" className="sell-label">
                Price: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={handleChange} name='price' value={price}
              />

            <label htmlFor="titleInput" className="sell-label">
                Category: <span className="sell-star-txt">*</span>
              </label>
              <select id="category" name="Category" value={Category} className="sell-input" onChange={handleChange}>
            <option value="">Select category</option>
            <option value="groceries">Groceries</option>
            <option value="electronics">Electronics</option>
            <option value="clothes">Clothes</option>
            <option value="shoes">Shoes</option>
          </select>

          <label htmlFor="stockInput" className="sell-label">
                Category: <span className="sell-star-txt">*</span>
              </label>
              <select id="stockInput" name="stockAvailability" value={stockAvailability} className="sell-input" onChange={handleChange}>
            <option value="In Stock">Yes</option>
            <option value="Not In Stock">No</option>
          </select>

              <label
                htmlFor="publicationInput"
                className="sell-label"
                cols="100"
              >
                Description: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="publicationInput"
                className="sell-input"
                onChange={handleChange} name='description' value={description}
              />
              <label htmlFor="isbnInput" className="sell-label">
              Manufactured By: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="isbnInput"
                className="sell-input"
                onChange={handleChange} 
                name='manufacturedBy' value={manufacturedBy}
              />
              <label htmlFor="printedInput" className="sell-label">
                Model: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="printedInput"
                className="sell-input"
                onChange={handleChange} name='model' value={model}
              />
              <label htmlFor="sellingInput" className="sell-label">
                Release Year: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="sellingInput"
                className="sell-input"
                onChange={handleChange} name='releaseYear' value={releaseYear}
              />

              {/* <label htmlFor="fileInput" className="sell-label">
                Product Image
              </label>
              <input id="fileInput" type="file" onChange={this.onFile} /> */}
              <div className="sell-btn-container">
                <button type="submit" className="sell-submit-btn">
                  Submit
                </button>
                <button onClick={clearData} type="button" className="sell-clear-btn">
                  Clear
                </button>
              </div>
              {/* {fieldsErrorStatus && (
                <p className="sell-error-txt">{fieldsErrorTxt}</p>
              )} */}
              {/* {showMsgStatus && (
                <div className={isSuccess ? 'success-txt' : 'failure-txt'}>
                  <p className="msg-txt">{showMsgTxt}</p>
                </div>
              )} */}
            </form>
            </div>
                    </div>
  );
};

export default AddProduct;
