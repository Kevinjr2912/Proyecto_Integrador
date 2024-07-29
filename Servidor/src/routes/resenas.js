const express = require('express');
const router = express.Router()
const resenasController = require('../controllers/resenas'); 

router.post('/addResena/:idCliente/:idProducto', resenasController.addResena);
router.delete('/deleteResena/:resenaId', resenasController.deleteResena);
<<<<<<< HEAD
router.get('/getResenas/:id', resenasController.getResenas);
=======
router.get('/getResenas/:idProducto', resenasController.getResenas);
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
router.put('/updateResena/:idResenaProducto', resenasController.updateResena);

module.exports = router;