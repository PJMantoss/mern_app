const httpError = require('../models/http-error');

const {v4: uuidv4} = require('uuid');

let DUMMY_USERS = [
    {
        id: 'u1',
        name: "PJ Toss",
        email: 'pj@example.com',
        password: 'passing'
    }
]

const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS })
};

const signup = (req, res, next) => {
    const { name, email, password } = req.body;

    const createdUser = {
        id:uuidv4(),
        name,
        email,
        password
    }

    DUMMY_USERS.push(createdUser);

    res.status(201).json({ user: createdUser })
};

const login = (req, res, next) => {
    res.status(200).json({ message: "User Logged In" })
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;