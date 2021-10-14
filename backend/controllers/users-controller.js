const httpError = require('../models/http-error');

const { validationResult } = require('express-validator');

const {v4: uuidv4} = require('uuid');

const User = require('../models/user');

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

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        res.status(422);
        throw new httpError("Invalid inputs. Please check data.", 422);
    }

    const { name, email, password } = req.body;

    // const hasUser = DUMMY_USERS.find(u => u.email === email);
    // if(hasUser){
    //     throw new httpError('User Already Exist', 422);
    // }

    let existingUser;

    try{
        existingUser = await User.findOne({});
    }catch(err){
        const error = httpError('Signup failed. Please try again', 500);
        next(error);
    }

    const createdUser = {
        id: uuidv4(),
        name,
        email,
        password
    }

    DUMMY_USERS.push(createdUser);

    res.status(201).json({ user: createdUser })
};

const login = (req, res, next) => {
    const { email, password } = req.body;

    const identifiedUser = DUMMY_USERS.find(u => u.email === email);

    if(!identifiedUser || identifiedUser.password !== password){
        throw new httpError('Wrong Credentials: Could not find user.', 401);
    }

    res.json({ message: "User Logged In" })
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;