import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Apple',
                    price: '10'
                },
                {
                    id: 2,
                    name: 'Banana',
                    price: '15'
                },
                {
                    id: 3,
                    name: 'Coconut',
                    price: '20'
                }

            ]
        }
    }
    render() {
        return (
            <div>
                <p>Welcome to Product List</p>
                {
                    this.state.products.map(function(item, index){
                    // need to use a unique key when you want render
                    // create a link for update product page
                    return <div key={index}> {item.id}. { item.name } : {item.price}
                        <Link to={`/editProduct/${item.id}`}><button className="btn btn-primary">Edit Product</button></Link>
                    </div>

                }) }
            </div>
        )
    }
}
