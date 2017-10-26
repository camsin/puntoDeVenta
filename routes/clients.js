/**
 * Created by camendez on 25/10/17.
 */
var express = require('express');
var router = express.Router();
const clientsController = require('../controllers/clients/clients');

/* GET users listing. */
router.get('/', clientsController.index);


router.get('/create', clientsController.create);

module.exports = router;
