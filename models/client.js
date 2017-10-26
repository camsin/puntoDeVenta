/**
 * Created by camendez on 25/10/17.
 */
const mongoose = require('mongoose');


const schema = mongoose.Schema;

const clientSchema = schema({
    name: String,
    lastName: String,
    address: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Client', clientSchema);
