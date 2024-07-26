const express = require('express');
const router = express.Router()
const resenasController = require('../controllers/resenas'); 

router.post('/addResena/:idCliente/:idProducto', resenasController.addResena);
router.delete('/deleteResena/:resenaId', resenasController.deleteResena);
router.get('/getResenas/:id', resenasController.getResenas);
router.put('/updateResena/:idResenaProducto', resenasController.updateResena);

module.exports = router;