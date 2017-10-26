const mongoose = require('mongoose');


const schema = mongoose.Schema;

const supplierSchema = schema({
    name: String,
    lastName: String,
    company: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Supplier', supplierSchema);
