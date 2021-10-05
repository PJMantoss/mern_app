const axios = require('axios');
const httpError = require('../models/http-error');

API_KEY = 'AIzaSyAs1ttmZ1WP1iJbtpwFoPHEYvhBXN7K7mA';

async function getCoordsForAddress(address){
    // return {
    //     lat: 40.7484405,
    //     lng: -73.9878584
    // }
//From Google Geocoding API - Geocoding Request & Response
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);

    const data = response.data

    if(!data || data.status === 'ZERO_RESULTS'){
        const error = new httpError('Could not find location for the specified address', 422); //422 - status code for invalid user input
        throw error;
    }
}