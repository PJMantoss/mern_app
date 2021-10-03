const express = require('express');

const router = express.Router();

const httpError = require('../models/http-error');

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;

    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if(!place){
        throw new Error("Could not find a place for the provided id.", 404);
    }
    
    res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    });

    if(!place){
        return next(
            new Error("Could not find a place for the provided user id.", 404)
        );
    }

    res.json({ place })
});

module.exports = router;