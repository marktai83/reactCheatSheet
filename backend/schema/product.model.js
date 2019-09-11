const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    name: {type: String},
    price: {type: String},
})

module.exports = mongoose.model('ProductStore1', Product)
