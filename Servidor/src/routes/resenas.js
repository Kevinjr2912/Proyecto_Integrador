const express = require('express');
const router = express.Router()
const resenasController = require('../controllers/resenas'); 

router.post('/addResena', resenasController.addResena);
router.delete('/deleteResena', resenasController.deleteResena);

module.exports = router;