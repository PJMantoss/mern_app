const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users-controller');

router.get('/', usersControllers);

router.post('/signup', usersControllers);

router.post('/login', usersControllers);

module.exports = router;