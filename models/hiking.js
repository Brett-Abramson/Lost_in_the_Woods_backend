const mongoose = require('mongoose');

const hikingSchema = new mongoose.Schema({

});

const Hiking = mongoose.model('Hiking', hikingSchema);

module.exports = Hiking;
