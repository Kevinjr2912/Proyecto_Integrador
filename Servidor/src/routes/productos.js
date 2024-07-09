const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productos');

//Rutas para los endpoints
router.post('/addProduct/', productsControllers.addProduct);
router.get('/getAllProducts', productsControllers.getAllProducts);
router.get('/searchProduct/:nombre', productsControllers.searchProduct);
router.put('/updateProduct/:id', productsControllers.updateProduct);
router.delete('/deleteProduct/:id', productsControllers.deleteProduct);

module.exports = router;