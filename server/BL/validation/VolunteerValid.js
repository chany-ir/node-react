const joi = require('joi');

const VolunteerValid = (_bodyData)=>{
    let joiSchema = joi.object({
        // descraption: joi.string().min(2).max(20).required(),
        // phon :joi.string().min(9).max(10).required(),
        // priority :joi.number().max(5)
        Fname: joi.string().min(2).max(50).required(),
        Lname: joi.string().min(2).max(50).required(),
        phon: joi.string().pattern(/^\d{9,10}$/).required(), // מספר טלפון 9-10 ספרות
        idVolunteer:joi.string().pattern(/^\d{9,10}$/).required(),
        // coordinates: joi.object({
        //     lon: joi.number().min(-180).max(180).required(), // לוודא שזה טווח תקין של קואורדינטות
        //     lat: joi.number().min(-90).max(90).required()
        // }).required()
    })
    return joiSchema.validate(_bodyData);
}

module.exports = VolunteerValid;