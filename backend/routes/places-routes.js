const express = require('express');

const router = express.Router();

const placesControllers = require('../controllers/places-controller');

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlaceByUserId);

router.post('/', placesControllers.createPlace);

router.patch('/', placesControllers.updatePlace);

router.delete('/', placesControllers.deletePlace);

module.exports = router;