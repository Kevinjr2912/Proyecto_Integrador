const express = require('express');
const router = express.Router();
const customersControllers = require('../controllers/clientes');

//Rutas para las endpoints
router.post('/addCustomer/', customersControllers.addCustomer);
router.get('/loginCustomer/', customersControllers.login);

module.exports = router;