const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

//middlewares
app.use('/api/places', placesRoutes);

//Error Handling middleware: Only runs when request has an error
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }

    res.status(error.code || 500);
    res.json({ message: '' });
});

app.listen(5000);