var express = require('express');
var router = express.Router();
const productsController = require('../controllers/products/products');

/* GET users listing. */
router.get('/', productsController.index);


router.get('/create', productsController.create);

module.exports = router;
