const VolunteerRepository = require('../DAL/Repository/VolunteerRep');
// const acsess = require('../DAL/Data/Acsess');
const BaseService = require('./BaseService');
// const ParamsError = require('./errors/prametersErorr');
// const IdError = require("./errors/IdErorr");
// const AcsessError = require("./errors/acsessErorr");
const IdError = require('../BL/Erorrs/IdErorr');

const ParamsError = require('../BL/Erorrs/ParamsErorr');
const validVolunteer = require("./validation/VolunteerValid");
class VolunteerService extends BaseService{
    constructor(){
        super(VolunteerRepository)
    }
    async insert(objToInsert) {
        let result;
        let neweVolunteer = validVolunteer(objToInsert);
        if (neweVolunteer.error)
            throw new ParamsError('Volunteer',neweVolunteer.error.details);
        else {
            let x = await this.repository.getById(objToInsert.id);
            console.log(x);
            if (x.length != 0)
                throw new IdError('this donation id is already exist');
            else{
                result = await this.repository.insert(objToInsert);
                return result;
        }
            }
    }
}
let volunteerService = new VolunteerService();
module.exports = volunteerService;