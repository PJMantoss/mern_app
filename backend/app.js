const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

//middlewares
app.use('/api/places', placesRoutes);

//Only run when request has an error
app.use((error, req, res, next) => {});

app.listen(5000);