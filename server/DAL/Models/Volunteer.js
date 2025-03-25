const mongoose = require('../ConnectionToDb');

const VolunteerSchema = new mongoose.Schema({
    phon: String,
    Fname: String,
    Lname: String,
    idVolunteer: String,
    // specialisations:[String],
    // coordinates: {
    //     lng: Number,
    //     lat: Number
    // },
});

const VolunteerModel = mongoose.model("volunteers", VolunteerSchema);

module.exports = VolunteerModel;