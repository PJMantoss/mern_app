const express = require('express');
//const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const usersRoutes = require('./routes/users-routes');

const mongoose = require('mongoose');

const app = express();

const httpError = require('./models/http-error');

//app.use(bodyParser.json());

app.use(express.json());

//middlewares
app.use('/api/places', placesRoutes);

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new httpError("Could not find this route.", 404);
    throw error;
})

//Error Handling middleware: Only runs when request has an error
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }

    res.status(error.code || 500);
    res.json({ message: error.message || 'An Unknown Error Occurred' });
});

mongoose
    .connect('mongodb+srv://mantoss:superstar@cluster0.kxgzl.mongodb.net/places?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000); //If connection was sucessful start backend server
    })
    .catch(err => {  //If it was not, catch the error.
        console.log(err);
    });