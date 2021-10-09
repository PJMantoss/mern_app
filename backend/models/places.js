const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placesSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});