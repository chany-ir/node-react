const specialisationRepository = require('../DAL/Repository/specialisationRep');
// const acsess = require('../DAL/Data/Acsess');
const BaseService = require('./BaseService');
// const ParamsError = require('./errors/prametersErorr');
// const IdError = require("./errors/IdErorr");
// const AcsessError = require("./errors/acsessErorr");
const IdError = require('../BL/Erorrs/IdErorr');

const ParamsError = require('../BL/Erorrs/ParamsErorr');
// const validVolunteer = require("./validation/VolunteerValid");
class SpecialisationService extends BaseService{
    constructor(){
        super(specialisationRepository)
    }
}
let specialisationService = new SpecialisationService();
module.exports = specialisationService;