/**
 * Created by camendez on 25/10/17.
 */
/**
 * Created by camendez on 25/10/17.
 */
const express = require('express')
const Client = require('../../models/client');


function index(req, res, next) {
    Client.find({}, (err, result) => {
        res.render('clients/index', {
        clients: result
    });
});
}


function create(req, res, next) {
    let client = new Client({
        name: "Consuelo",
        lastName: "Mendez",
        address: "Los pinos #234",
        email: "consuelo@gmail.com",
        phone: "423049234"
    });
    client.save((err) => {
        if (err) {
            res.send('error!!!!');
        } else {
            res.send('Cliente creado!!!!');
}
});

}

module.exports = {
    index,
    create
};
