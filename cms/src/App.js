import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import AddProduct from './components/add-product'
import EditProduct from './components/edit-product'
import ProductList from './components/product-list'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                  <h2>MERN APP</h2>
                  <ul>
                    <li><Link to="/">Main Page</Link></li>
                    <li><Link to="/addProduct">Add Product</Link></li>
                  </ul>

                </div>
                <Route path="/" exact component={ProductList} />
                <Route path="/addProduct" component={AddProduct} />
                <Route path="/editProduct/:id" component={EditProduct} />
            </Router>
        );
    }
}

export default App;
