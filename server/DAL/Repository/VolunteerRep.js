const VolunteerModel = require('../Models/Volunteer');
class VolunteerRepository {
    async get(queryParams) {
        let result;
            result = await VolunteerModel.find();
            console.log("i in simple get",result);
        return result;
    }
    async getById(id) {
        console.log(id);
        let result = await VolunteerModel.find({"idVolunteer":id});
        console.log(result);
        return result;
    }
    async insert(objToInsert) {
        console.log("i in the rep",objToInsert);
        let newVolunteer = new VolunteerModel(objToInsert);
        await newVolunteer.save();
        return newVolunteer;
    }
    async update(id, objToUpdate) {
        let data = await VolunteerModel.updateOne({ "id": id }, objToUpdate);
        return data;
    }
    async delete(id) {
                let data=await VolunteerModel.deleteOne({"id":id});
                return data;
            }
}
let volunteerRepository = new VolunteerRepository();

 module.exports = volunteerRepository;