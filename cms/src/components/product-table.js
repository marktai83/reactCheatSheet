import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from 'axios';

export default class ProductTable extends Component {


    render() {
        const { products, removeProduct } = this.props;
        console.log(products);
        return (
            products.map(function(item, index){
            // need to use a unique key when you want render
            // create a link for update product page
            return <tr>
                <td key={index}>{item._id} </td>
                <td>{ item.name } </td>
                <td>{item.price} </td>
                <td> <Link to={`/editProduct/${item._id}`}><button className="btn btn-info">Update Product</button></Link> </td>
                <td> <input type="submit" className="btn btn-danger" id={item._id} value="Delete Product" onClick={removeProduct}/>  </td>
            </tr>
        })
        )
    }
}
