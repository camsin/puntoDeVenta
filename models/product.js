const mongoose = require('mongoose');


const schema = mongoose.Schema;

const productSchema = schema({
    name: String,
    price: String,
    quantity: String
});

module.exports = mongoose.model('Product', productSchema);
