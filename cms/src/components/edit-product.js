import React, { Component } from 'react';
let products =  [
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
export default class EditProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            name: '',
            price: ''
        };
    }
    componentDidMount () {
        this.getProductDetail();
    }
    getProductDetail(){
        let productNo = this.props.match.params.id;
        let product = products.filter(item =>{
            return item.id == productNo;
        })
        product = product && product[0] ? product[0] : null;
        this.setState({
            name: product.name,
            price: product.price
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
                    <input type="submit" value="Update Product" className="btn btn-primary" />
                </div>
            </div>
        )
    }
}
