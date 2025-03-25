const mongoose = require('../ConnectionToDb');

const LocationSchema = new mongoose.Schema({
    idPlace: Number,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

const LocationModel = mongoose.model("c", LocationSchema);

module.exports = LocationModel;