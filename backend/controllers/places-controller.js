const httpError = require('../models/http-error');

const { validationResult } = require('express-validator');

const getCoordsForAddress = require('../util/location');

const {v4: uuidv4} = require('uuid');

const Place = require('../models/places');

let DUMMY_PLACES = [
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

const getPlacesByUserId = (req, res, next) => {
    const userId = req.params.uid;

    const places = DUMMY_PLACES.filter(p => {
        return p.creator === userId;
    });

    if(!places || places.length === 0){
        return next(
            new Error("Could not find a place for the provided user id.", 404)
        );
    }

    res.json({ places })
}

const createPlace = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        res.status(422);
        next(new httpError("Invalid inputs. Please check data.", 422));
    }

    const { title, description, address, creator } = req.body;
    // Obj destructuring. Same as ... const title = req.body.title

    let coordinates;

    try{
        coordinates = await getCoordsForAddress(address);
    }catch(error){
        next(error)
    }

    const createdPlace = new Place({
        id: uuidv4(),
        title,
        description,
        location: coordinates,
        address,
        creator
     });

    DUMMY_PLACES.push(createdPlace); 
    // or DUMMY_PLACES.unshift(createdPlace) if it's to be added as the first item

    res.status(201).json({ place: createdPlace })
};

const updatePlace = (req, res, next) => {
    const { title, description } = req.body;
    const placeId = req.params.id;

    const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);

    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
    const placeId = req.params.id;

    if(!DUMMY_PLACES.find(p => p.id === placeId)){
        throw new httpError("Could not find a place for that ID.", 404)
    }

    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);

    res.status(200).json({ message: "Place Deleted." })
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;