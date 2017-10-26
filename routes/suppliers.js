var express = require('express');
var router = express.Router();
const suppliersController = require('../controllers/suppliers/suppliers');

/* GET home page. */
router.get('/', suppliersController.index);

router.get('/create', suppliersController.create);

module.exports = router;
