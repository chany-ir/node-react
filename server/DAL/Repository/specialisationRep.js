const specialisationModel = require('../Models/specialisation');
class SpecialisationRepository {
    async get(queryParams) {
            result = await specialisationModel.find();
        return result;
    }
   
    async insert(objToInsert) {
        let newHelpRequest = new specialisationModel(objToInsert);
        await newHelpRequest.save();
        return newHelpRequest;
    }
    async update(id, objToUpdate) {
        let data = await specialisationModel.updateOne({ "_id": id }, objToUpdate);
        return data;
    }
    async delete(id) {
                let data=await specialisationModel.deleteOne({"_id":id});
                return data;
            }
}
let specialisationRepository = new SpecialisationRepository();

 module.exports = specialisationRepository;