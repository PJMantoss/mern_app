const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

const httpError = require('./models/http-error');

//app.use(bodyParser.json());

app.use(express.json());

//middlewares
app.use('/api/places', placesRoutes);

//Error Handling middleware: Only runs when request has an error
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }

    res.status(error.code || 500);
    res.json({ message: error.message || 'An Unknown Error Occurred' });
});

app.listen(5000);