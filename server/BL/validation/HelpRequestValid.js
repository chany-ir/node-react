const joi = require('joi');

const HelpRequestValid = (_bodyData)=>{
    let joiSchema = joi.object({
        // priority: joi.string().min(5).max(7).required(),
        // status: joi.string().min(5).max(7).required(),
        // numPeople:joi.number().min(0),
        // idVolunteer: joi.string().min(2).max(20),
        // description: joi.string().min(2).max(20).required(),
        // phone :joi.string().min(9).max(10).required(),
        // coordinates: joi.object({
        //     lng: joi.number().min(-180).max(180).required(), // לוודא שזה טווח תקין של קואורדינטות
        //     lat: joi.number().min(-90).max(90).required()
        // }).required()
        priority: joi.string().valid('נמוכה', 'בינונית', 'גבוהה', 'קריטית').required(),
        status: joi.string().valid('מחכה', 'בטיפול', 'הסתיים').required(),
        numPeople: joi.number().min(0).required(),
        idVolunteer: joi.string().min(2).max(20),
        description: joi.string().min(2).max(20).required(), // תיקון שם השדה
        phone: joi.string().pattern(/^0\d{9}$/).required(), // וולידציה לטלפון ישראלי
        coordinates: joi.object({
            lng: joi.number().min(-180).max(180).required(), // תיקון שם השדה
            lat: joi.number().min(-90).max(90).required()
        }).required()
    })
    return joiSchema.validate(_bodyData);
}

module.exports = HelpRequestValid;
