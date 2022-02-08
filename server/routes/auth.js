const express = require('express');


const router = express.Router();
const { signupp, login } = require('../controllers/auth.js')


router.post('/signup');
router.post('/login');



module.exports = router;