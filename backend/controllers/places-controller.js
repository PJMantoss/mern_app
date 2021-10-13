const httpError = require('../models/http-error');

const { validationResult } = require('express-validator');

const getCoordsForAddress = require('../util/location');

const {v4: uuidv4} = require('uuid');

const Place = require('../models/place');

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
const getPlaceById = async (req, res, next) => {
    const placeId = req.params.pid;

    let place;

    try{
        place = await Place.findById(placeId);
    }catch(err){
        const error = new httpError('Error! Could not find place.', 500);
        return next(error);
    }

    // const place = DUMMY_PLACES.find(p => {
    //     return p.id === placeId;
    // });

    if(!place){
        const error = httpError("Could not find a place for the provided id.", 404);
        return next(error);
    }
    
    res.json({ place: place.toObject({ getters: true }) }); // toObject() converts json to JS Obj
};

const getPlacesByUserId = async (req, res, next) => {
    const userId = req.params.uid;

    let places;

    try{
        places = await Place.find({ creator: userId });
    }catch(err){
        const error = new httpError('Fetching places failed. Please try again.', 500);
        return next(error);
    }

    // const places = DUMMY_PLACES.filter(p => {
    //     return p.creator === userId;
    // });

    if(!places || places.length === 0){
        return next(
            new Error("Could not find a place for the provided user id.", 404)
        );
    }

    res.json({ places: places.map(place => place.toObject({ getters: true })) })
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
        title,
        description,
        image: 'https://images.unsplash.com/photo-1538708027031-6955608d3c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
        address,
        location: coordinates,
        creator
     });

     try{
         await createdPlace.save();
     }catch(err){
         const error = new httpError("Creating Place failed, try again.", 500)
         return next(error);
     }

    // DUMMY_PLACES.push(createdPlace); 
    // or DUMMY_PLACES.unshift(createdPlace) if it's to be added as the first item

    res.status(201).json({ place: createdPlace })
};

const updatePlace = async (req, res, next) => {
    const { title, description } = req.body;
    const placeId = req.params.id;

    // const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
    // const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);

    let place;

    try{
        place = await Place.findById(placeId);
    }catch(err){
        const error = new httpError('Error! Could not update place.', 500);
        return next(error);
    }

    // updatedPlace.title = title;
    // updatedPlace.description = description;
    // DUMMY_PLACES[placeIndex] = updatedPlace;

    place.title = title;
    place.description = description;

    try{
        await Place.save();
    }catch(err){
        const error = new httpError('Error! Could not update place.', 500);
        return next(error);
    }

    res.status(200).json({ place: place.toObject({ getters: true }) });
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