const express = require('express');

const router = express.Router();

const httpError = require('../models/http-error');

router.get('/:pid');

router.get('/user/:uid');

module.exports = router;