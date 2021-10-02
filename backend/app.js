const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

//middlewares
app.use('/api/places', placesRoutes);

app.use((error, req, res, next) => {}); //Only run when request has an error

app.listen(5000);