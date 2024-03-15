import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'

import './App.css'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import ProductContext from './context/ProductContext'
import AddProduct from './components/AddProduct';
import Orders from './components/Orders';
import ProductDetails from './components/ProductDetails';

import Clothes from '../src/images/clothes.jpg';
import Electronics from '../src/images/electronics.jpg';
import Groceries from '../src/images/groceries.jpg';
import Shoes from '../src/images/shoes.jpg';

class App extends Component {

  state = {
    productsList: [
      {
          "id": 1,
          "Name": "iPhone 13 Pro Max",
          "Cost": "130000",
          "Model": "A2643",
          "InStock": true,
          "Manufacturer": "Apple",
          "ReleaseYear": 2021,
          "Category": "Electronics",
          "image": Electronics
      },
      {
          "id": 2,
          "Name": "USA polo T shirt",
          "Cost": "1200",
          "Model": "SM-G991U",
          "InStock": true,
          "Manufacturer": "USA polo",
          "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      },
      {
          "id":3,
          "Name": "RedTape Cargo pant",
          "Cost": "720",
          "Model": "GD1YQ",
          "InStock": true,
          "Manufacturer": "RedTape",
          "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      },
      {
          "id": 4,
          "Name": "Puma Running Shoes",
          "Cost": "1499",
          "Model": "LE2110",
          "InStock": false,
          "Manufacturer": "Puma",
           "ReleaseYear": 2021,
          "Category": "Shoes",
          "image": Shoes
      },
      {
          "id": 5,
          "Name": "Xiaomi Mi 11 Ultra",
          "Cost": "90000",
          "Model": "M2102K1G",
          "InStock": true,
          "Manufacturer": "Xiaomi",
          "ReleaseYear": 2021,
          "Category": "Electronics",
          "image": Electronics
      },
      {
          "id": 6,
          "Name": "Huawei P50 Pro",
          "Cost": "120000",
          "Model": "PREM-AN00",
          "InStock": false,
          "ReleaseYear": 2021,
          "Category": "Electronics",
          "image": Electronics
      },
      {
          "id": 7,
          "Name": "Levi's Denim Shirt",
          "Cost": "4990",
          "Model": "XQ-BC72",
          "InStock": true,
          "Manufacturer": "Levi's",
           "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      },
      {
          "id": 8,
          "Name": "Nike Air Jordan",
          "Cost": "9999",
          "Model": "LM-V710EMW",
          "InStock": true,
          "Manufacturer": "Nike",
           "ReleaseYear": 2021,
          "Category": "Shoes",
          "image": Shoes
      },
      {
          "id": 9,
          "Name": "Reebook Causals",
          "Cost": "85000",
          "Model": "XT2153-1",
          "InStock": true,
          "Manufacturer": "Reebook",
           "ReleaseYear": 2021,
          "Category": "Shoes",
          "image": Shoes
      },
      {
          "id": 10,
          "Name": "GAP hoodie",
          "Cost": "86000",
          "Model": "ZS673KS",
          "InStock": false,
          "Manufacturer": "GAP",
          "ReleaseYear": 2021,
          "Category": "Clothes",
          "image": Clothes
      }
  ],
  }

  addNewProduct = (mobileName,price,description,stockAvailability,model,manufacturedBy,releaseYear,category) => {
    const {productsList} = this.state
    const categoryImageMap = {
      groceries: Groceries,
      clothes: Clothes,
      shoes: Shoes,
      electronics: Electronics
  };
  console.log(price)
    const newProduct = {
          "id": productsList.length + 1,
          "Name": mobileName,
          "Cost": price,
          "Model": model,
          "InStock": stockAvailability === "Yes" ? true : false,
          "Manufacturer": manufacturedBy,
          "ReleaseYear": releaseYear,
          "description": description,
          "image": categoryImageMap[category.toLowerCase()]}
   this.setState(prevState => ({productsList: [...prevState.productsList, newProduct]}))
  }

  render() {
    const productsList = this.state
    return (
      <ProductContext.Provider
      value={{
        productsList,
        addNewProduct: this.addNewProduct
      }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/products" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<Orders />}/>
        </Routes>
      </ProductContext.Provider>
    )
  }
}

export default App