const mongoose = require('mongoose');

const hikingSchema = new mongoose.Schema({
    name: {type: String, require},
    photo: String,
    distance: Number,
    duration: Number,
    location: String,
    difficulty: String,
    elevationGain: Number,
    routeType: String,
    mapIntigration: String,
    tags: [{
        quick: Boolean,
        easy: Boolean,
        challenging: Boolean,
        petFriednly: Boolean,
        offLeash: Boolean,
        kidFriendly: Boolean,
        handicap: Boolean,
        wheelchair: Boolean,
        easeHead: Boolean,
        bathrooms: Boolean,
        water: Boolean,
        freePraking: Boolean,
    }],
    description: String,
    parkingDetails: String,
    comments: [{
        photo: String,
        name: String,
        duration: String,
        weather: String,
        commentSection: String,
        date: String
        // timestamps: true,
    }]
});

const Hiking = mongoose.model('Hiking', hikingSchema);

module.exports = Hiking;
