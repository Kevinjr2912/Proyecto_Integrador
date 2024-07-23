const express = require('express');
const router = express.Router();
const controllersCar = require('../controllers/carrito');

router.post('/addProductToCar', controllersCar.addCar);

module.exports = router;