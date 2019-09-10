import React, { Component } from 'react';

export default class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmitProduct = this.onSubmitProduct.bind(this);

        this.state = {
            name: '',
            price: ''
        }
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
    onSubmitProduct(e) {
        console.log(e.target);
        this.setState({ price : e.target.value})
    }

    render() {
        return (
            <div>
                <h2>Add A Product</h2>
                <div>
                    <label>Product Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeProductName}/>
                    <label>Product Price</label>
                    <input type="text" className="form-control" value={this.state.price} onChange={this.onChangeProductPrice}/>
                </div>
                <div>
                    <input type="submit" value="Create Todo" className="btn btn-primary" onChange={this.onSubmitProduct}/>
                </div>
            </div>
        )
    }
}
