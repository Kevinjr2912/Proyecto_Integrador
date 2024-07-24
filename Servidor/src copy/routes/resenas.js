const express = require('express');
const router = express.Router();
const resenasController = require('../controllers/resenas'); 

router.post('/addResena', resenasController.addReseña);
router.delete('/deleteReseña', resenasController.deleteReseña);

module.exports = router;