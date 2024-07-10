const express = require('express');
const router = express.Router();
const adminController = require('../controllers/administrador')

router.get('/login', adminController.login);
router.post('/addAdmin', adminController.addAdmin)
module.exports = router;