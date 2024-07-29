const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productos');

//Rutas para los endpoints
router.get('/getAllProducts', productsControllers.getAllProducts);
router.get('/getHelmets', productsControllers.getAllHelmets);
router.get('/getAllOveralls', productsControllers.getAllOveralls);
router.get('/getInformationProduct/:idProducto', productsControllers.getInformationProduct);
<<<<<<< HEAD
router.get('/getOchoHelmets',productsControllers.getOchoHelmets)
router.get('/getOchoOveroles',productsControllers.getOchoOveroles)
router.post('/addProduct/', productsControllers.addProduct);
=======
router.post('/addProduct', productsControllers.addProduct);
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
router.put('/updateProduct/:id', productsControllers.updateProduct);
router.delete('/deleteProduct/:id', productsControllers.deleteProduct);

module.exports = router;