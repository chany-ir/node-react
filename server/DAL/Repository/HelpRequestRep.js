
const HelpRequestModel = require('../Models/HelpRequest');
class HelpRequesRepository {
    async get(queryParams) {
        let result;
        if (queryParams.descraption) {
            result = await HelpRequestModel.find({ descraption: queryParams.descraption });
        }
        else if (queryParams.priority) {
            result = await HelpRequestModel.find({ priority: queryParams.priority });
        }
        else if (queryParams.status) {
            result = await HelpRequestModel.find({ status: queryParams.status });
        }
        else if (queryParams.idVolunteer) {
            result = await HelpRequestModel.find({ idVolunteer: queryParams.idVolunteer });
        }
        else {
            result = await HelpRequestModel.find();
        }
        return result;
    }
    async getById(id) {
        let result = await HelpRequestModel.findById(id);
        return result;
    }
    async insert(objToInsert) {
        let newHelpRequest = new HelpRequestModel(objToInsert);
        console.log(objToInsert);
        console.log(objToInsert.phone);
        
        await newHelpRequest.save();
        return newHelpRequest;
    }
    async update(id, objToUpdate) {
        let data = await HelpRequestModel.updateOne({ "_id": id }, objToUpdate);
        return data;
    }
    async delete(id) {
                let data=await HelpRequestModel.deleteOne({"_id":id});
                return data;
            }
}
let helpRequesRepository = new HelpRequesRepository();

 module.exports = helpRequesRepository;