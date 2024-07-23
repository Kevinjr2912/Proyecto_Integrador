const express = require('express');
const router = express.Router();
const reseñasController = require('../controllers/reseñas'); 

router.post('/addReseña', reseñasController.addReseña);
router.delete('/deleteReseña', reseñasController.deleteReseña);



module.exports = router;