const httpError = require('../models/http-error');

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        description: 'One of the most famous skycrapers in the world',
        imageUrl: 'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
        address: '20 W 34th St, New York, NY 10001, USA',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    }
]

//To be used as Call back functions in Places Routes
const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid;

    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });

    if(!place){
        throw new Error("Could not find a place for the provided id.", 404);
    }
    
    res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
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
}

const createPlace = (req, res, next) => {
    const { title, description, coordinates, address, creator } = req.body;

    const createdPlace = {};
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;