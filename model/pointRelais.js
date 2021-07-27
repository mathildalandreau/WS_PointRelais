const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PointRelaisSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    adresse: {
        rue: String,
        ville: String,
        codePostal: String
    },
    latitude: { type: String },
    longitude: { type: String },
    horaires: [{
        jour: String,
        matin: String,
        soir: String,
        jourentier: String
    }]
});

const PointRelais = mongoose.model('pointRelai', PointRelaisSchema);
module.exports = PointRelais;
