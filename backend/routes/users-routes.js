const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/users-controller');

router.get('/', usersControllers.getAllUsers);

router.post('/signup', usersControllers.signUpUser);

router.post('/login', usersControllers.loginUser);

module.exports = router;