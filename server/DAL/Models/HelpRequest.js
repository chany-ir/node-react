const mongoose = require('../ConnectionToDb');

const Status = Object.freeze({
    WAIT: 'מחכה',
    TREATED: 'בטיפול',
    FINISHED: 'הסתיים'
});
const Priority = Object.freeze({
    LOW:'נמוכה',
    MEDIUM:'בינונית',
    HIGH:'גבוהה',
    CRITICAL:'קריטית'

});
const HelpRequestSchema = new mongoose.Schema({
    coordinates: {
        lng: Number,
        lat: Number
    },
    description: String,
    phone: String,
    priority: Object.values(Priority),
    status: Object.values(Status),
    numPeople: Number,
    idVolunteer: String
});

const HelpRequestModel = mongoose.model("help_requestes",HelpRequestSchema);

module.exports = HelpRequestModel;
