const httpError = require("../models/http-error");

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' '); // Authorization: 'Bearer TOKEN'
        if(!token){
            throw new Error('Authentication failed');
        }
    }catch(err){
        const error = new httpError('Authentication failed', 401);
        return next(error);
    }
};