const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

//middlewares
app.use('/api/places', placesRoutes);

app.use((req,res, next) => {});

app.listen(5000);