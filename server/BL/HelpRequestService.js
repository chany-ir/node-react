const helpRequestRepository = require('../DAL/Repository/HelpRequestRep');
// const acsess = require('../DAL/Data/Acsess');
const BaseService = require('./BaseService');
// const ParamsError = require('./errors/prametersErorr');
// const IdError = require("./errors/IdErorr");
// const AcsessError = require("./errors/acsessErorr");
const IdError = require('../BL/Erorrs/IdErorr');

const ParamsError = require('../BL/Erorrs/ParamsErorr');
const validHelpRequest = require("./validation/HelpRequestValid");
class HelpRequestService extends BaseService{
    constructor(){
        super(helpRequestRepository)
    }
    async insert(objToInsert) {
        let result;
        let newelpRequest = validHelpRequest(objToInsert);
        console.log("the service chack",newelpRequest);
        console.log("i try to insert",objToInsert);
        
        if (newelpRequest.error){
            console.log("ewelpRequest.error");
            throw new ParamsError('helpRequest',newelpRequest.error.details);
        }

           
        else {
            let x = await this.repository.getById(objToInsert.id);
            console.log("the x",x);
            if (x!=null)
                throw new IdError('this donation id is already exist');
            else{
                result = await this.repository.insert(objToInsert);
                return result;
        }
            }
    }
}
let helpRequestService = new HelpRequestService();
module.exports = helpRequestService;