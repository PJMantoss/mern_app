const httpError = require('../models/http-error');

const { validationResult } = require('express-validator');

//const {v4: uuidv4} = require('uuid');

const User = require('../models/user');

// let DUMMY_USERS = [
//     {
//         id: 'u1',
//         name: "PJ Toss",
//         email: 'pj@example.com',
//         password: 'passing'
//     }
// ]

const getUsers = async (req, res, next) => {
    // res.json({ users: DUMMY_USERS })
    
    let users;

    try{
        users = await User.find({}, '-password');
    }catch(err){
        const error = new httpError('Fetching users failed. Please try again', 500);
        return next(error);
    }

    res.json({ users: users.map(user => user.toObject({ getters: true })) });

};

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new httpError("Invalid inputs. Please check data.", 422));
    }

    const { name, email, password } = req.body;

    // const hasUser = DUMMY_USERS.find(u => u.email === email);
    // if(hasUser){
    //     throw new httpError('User Already Exist', 422);
    // }

    let existingUser;

    try{
        existingUser = await User.findOne({ email: email });
    }catch(err){
        const error = new httpError('Signup failed. Please try again', 500);
        return next(error);
    }

    if(existingUser){
        const error = new httpError('User already exist, login instead', 422);
        return next(error);
    }

    // const createdUser = {
    //     id: uuidv4(),
    //     name,
    //     email,
    //     password
    // }

    const createdUser = new User({
        name,
        email,
        image: req.file.path,
        password,
        places: []
    })

    // DUMMY_USERS.push(createdUser);
    //'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'

    try{
        await createdUser.save();
    }catch(err){
        const error = new httpError("Sign Up failed, Please try again.", 500)
        return next(error);
    }

    res.status(201).json({ user: createdUser.toObject({ getters: true }) })
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({ email: email });
        //setUserId(uid);
    }catch(err){
        const error = new httpError('Login failed. Please try again', 500);
        return next(error);
    }

    if(!existingUser || existingUser.password !== password){
        const error = new httpError('Invalid credentials, could not login', 401);
        return next(error);
    }

    // const identifiedUser = DUMMY_USERS.find(u => u.email === email);

    // if(!identifiedUser || identifiedUser.password !== password){
    //     throw new httpError('Wrong Credentials: Could not find user.', 401);
    // }

    res.json({ 
        message: "User Logged In",
        user: existingUser.toObject({ getters: true }) 
    })
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;