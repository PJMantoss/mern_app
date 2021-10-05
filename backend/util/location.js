const axios = require('axios');

API_KEY = 'AIzaSyAs1ttmZ1WP1iJbtpwFoPHEYvhBXN7K7mA';

async function getCoordsForAddress(address){
    // return {
    //     lat: 40.7484405,
    //     lng: -73.9878584
    // }
//From Google Geocoding API - Geocoding Request & Response
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY`);
}