import React, { Component } from 'react';
import axios from 'axios';

export default class EditProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            name: '',
            price: ''
        };
        this.updateProduct = this.updateProduct.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    }

    // for single value change
    onChangeProductName(e) {
        console.log(e.target);
        this.setState({ name : e.target.value})
    }
    onChangeProductPrice(e) {
        console.log(e.target);
        this.setState({ price : e.target.value})
    }
    componentDidMount () {
        this.getProduct();
    }
    getProduct(){
        let productNo = this.props.match.params.id;
        axios.get('http://localhost:4000/api/product/'+productNo)
            .then( res => {
                console.log(res.data.data);
                this.setState({
                    name: res.data.data.name,
                    price: res.data.data.price
                })
            })
    }
    updateProduct() {
        let productNo = this.props.match.params.id;
        let sendData = {
            name: this.state.name,
            price: this.state.price
        }
        axios.post('http://localhost:4000/api/product/'+productNo, sendData)
            .then( res => {
                console.log(res.data);
                this.setState({
                    name: res.data.name,
                    price: res.data.price
                })
            })
    }
    render() {
        return (
            <div>
                { this.props.match.params.id }
                <p>Update Product</p>
                <div>
                    <label>Product Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeProductName}/>
                    <label>Product Price</label>
                    <input type="text" className="form-control" value={this.state.price} onChange={this.onChangeProductPrice}/>
                </div>
                <div>
                    <input type="submit" value="Update Product" className="btn btn-info" onClick={this.updateProduct}/>
                </div>
            </div>
        )
    }
}
