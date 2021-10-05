const express = require('express');

const { check } = require('express-validator');

const router = express.Router();

const usersController = require('../controllers/users-controller');

router.get('/', usersController.getUsers);

router.post(
    '/signup', 
    check('name')
    .not()
    .isEmpty(),
    usersController.signup
    );

router.post('/login', usersController.login);

module.exports = router;