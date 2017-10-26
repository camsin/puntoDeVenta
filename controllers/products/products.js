/**
 * Created by camendez on 25/10/17.
 */
const express = require('express')
const Product = require('../../models/product');


function index(req, res, next) {
    Product.find({}, (err, result) => {
        res.render('products/index', {
        products: result
    });
});
}


function create(req, res, next) {
    let product = new Product({
        name: "Leche",
        price: "$30.00 pesos",
        quantity: "30 lts"
    });
    product.save((err) => {
        if (err) {
            res.send('error!!!!');
        } else {
            res.send('Producto creado!!!!');
}
});

}

module.exports = {
    index,
    create
};
