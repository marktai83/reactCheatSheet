import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios';
import ProductTable from './product-table'

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.getProducts = this.getProducts.bind(this);
        this.removeProduct = this.removeProduct.bind(this);

        this.state = {
            products: []
        }

    }
    componentDidMount() {
        this.getProducts()
    }
    getProducts() {
        axios.get('http://localhost:4000/api/products')
            .then( res => {
                console.log(res.data);
                this.setState({ products: res.data })
            })
    }
    removeProduct(e) {
        e.preventDefault();
        let productId = e.target.id;
        axios.post('http://localhost:4000/api/delete/' + productId)
            .then( res => {
                console.log(res.data);
                this.getProducts();
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <p>Welcome to Product List</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <ProductTable products= {this.state.products} removeProduct={this.removeProduct}   />

                </table>
            </div>
        )
    }
}
