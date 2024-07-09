const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productos');

//Rutas para los endpoints
router.post('/addProduct/', productsControllers.addProduct);
router.put('/updateProduct/:id',productsControllers.updateProduct);
router.delete('/deleteProduct/:id',  productsControllers.deleteProduct);
router.delete('/deleteImgProduct/:idProducto', productsControllers.deleteImgProduct);

module.exports = router;