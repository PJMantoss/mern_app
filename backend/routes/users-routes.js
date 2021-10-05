const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users-controller');

router.get('/');

router.post('/signup');

router.post('/login');

module.exports = router;