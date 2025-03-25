const { string } = require('joi');
const mongoose = require('../ConnectionToDb');

const specialisationSchema = new mongoose.Schema({
    nameS: String
});

const specialisationModel = mongoose.model("specialisation", specialisationSchema);

module.exports = specialisationModel;