const express = require('express');

const router = express.Router();

const placesControllers = require('../controllers/places-controller');

router.get('/:pid');

router.get('/user/:uid');

module.exports = router;