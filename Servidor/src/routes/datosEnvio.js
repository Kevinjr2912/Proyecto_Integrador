const express = require('express');
const router = express.Router();
const controllershippingData = require('../controllers/datosEnvio');

router.post('/addShippingInformation/:idCliente', controllershippingData.addShippingInformation);
router.get('/getCustomerAddress/:idCliente', controllershippingData.getCustomerAddress);
router.get('/getFormCustomerAddress/:idCliente', controllershippingData.getFormCustomerAddress);

module.exports = router;