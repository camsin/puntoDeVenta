const express = require('express')
const Supplier = require('../../models/supplier');


function index(req, res, next) {
    Supplier.find({}, (err, result) => {
        res.render('suppliers/index', {
        suppliers: result
    });
});
}

// function show(req, res, next) {
//     res.send('Hola Express!!!!');
// }
//
//
function create(req, res, next) {
    let supplier = new Supplier({
        name: "Ararat",
        lastName: "Mendez",
        company: "Bodega dona Chelo",
        email: "a@correo.mx",
        phone: "98723478"
    });
    supplier.save((err) => {
        if (err) {
            res.send('error!!!!');
        } else {
            res.send('Proveedor creado!!!!');
}
});

}

module.exports = {
    index,
    create
};
