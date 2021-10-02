const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

//middleware
const app = express();

app.use('/api/places', placesRoutes);

app.use((req,res, next) => {});

app.listen(5000);