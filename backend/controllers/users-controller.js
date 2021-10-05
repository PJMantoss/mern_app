const httpError = require('../models/http-error');

const {v4: uuidv4} = require('uuid');

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

const getUsers = (req, res, next) => {
    res.status(200).json({ message: "All Users" })
};

const signup = (req, res, next) => {
    res.status(200).json({ message: "User Signed Up" })
};

const login = (req, res, next) => {
    res.status(200).json({ message: "User Logged In" })
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;