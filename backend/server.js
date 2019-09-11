const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Product = require('./schema/product.model');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('Mongodb database connection established successfully');
})

todoRoutes.route('/products').get(function(req, res) {
    Product.find({}, function (err, products) {
        if (err) {
            console.log(err);
        } else {
            console.log(products)
            res.json(products);
        }
    })
})
//get product
todoRoutes.route('/product/:id').get (function(req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (!product) {
            res.status(404).send('data is not found')
        }
        else{
            res.status(200).json({'data':product})
        }
    })
})
//add product
todoRoutes.route('/product').post (function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(data => {
            res.status(200).json({'product':'product added!'})
        })
        .catch(err => {
            res.status(400).send('adding failed！');
        })
})

//edit product
todoRoutes.route('/product/:id').post (function(req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (!product) {
            res.status(404).send('data is not found')
        }
        else{
            product.name = req.body.name;
            product.price = req.body.price;

            product.save().then(()=>{
                res.json('Product Update!');
            })
            .catch ( err => {
                res.status(400).send('Update not possible');
            })
        }
    })
})
todoRoutes.route('/delete/:id').post (function(req, res) {
    console.log(req.params.id)

    Product.deleteOne({_id: req.params.id}, function (err, product) {
        if (!product) {
            res.status(404).send('data is not found')
        }
        else{
            res.json('Product Deleted!');
        }
    })
})
app.use('/api', todoRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
})
