const mongoose = require('mongoose');

const campingSchema = new mongoose.Schema({
    name: {type: String, require},
    location: String,
    campType: String,
    Amenities: {
        water: Boolean,
        electric: Boolean,
        pool: Boolean,
        generalStore: Boolean,
        laundry: Boolean,
        wifi: Boolean,
        potableWater: Boolean,
        trash: Boolean,
        recycling: Boolean,
        dumpStation: Boolean,
        bathroom: Boolean,
        shower: Boolean,
        grill: Boolean,
        fireRing: Boolean
    },
    campsiteSize: String,
    campgroundSize: String,
    easeOfBooking: String,
    storesNearby: String,
    parking: String,
    decription: String,
    bookingType: String,
    comments: {
        photo: String,
        name: String,
        duration: String,
        weather: String,
        commentSection: String,
        // timestamps: true,
    }


});

const Camping = mongoose.model('Camping', campingSchema);

module.exports = Camping;
