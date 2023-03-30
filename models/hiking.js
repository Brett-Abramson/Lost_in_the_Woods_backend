const mongoose = require('mongoose');

const hikingSchema = new mongoose.Schema({
    photo: String,
    name: String,
    distance: Number,
    duration: Number,
    location: String,
    difficulty: String,
    elevationGain: Number,
    routeType: String,
    mapIntigration: String,
    tags: [String],
    description: String,
    comments: {
        photo: String,
        name: String,
        duration: String,
        weather: String,
        commentSection: String
    }
});

const Hiking = mongoose.model('Hiking', hikingSchema);

module.exports = Hiking;
