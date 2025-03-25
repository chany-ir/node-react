const IdError = require('../BL/Erorrs/IdErorr');
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    async get(queryParams) {
        let result = await this.repository.get(queryParams);
        return result;
    }
    async getById(id) {
        let result = await this.repository.getById(id);
        if(result)
            return result;
        else
            throw new IdError('the id is not exist');
    }
    async insert(objToInsert) {
        console.log("i in service",objToInsert);
        let result = await this.repository.insert(objToInsert);
        console.log(result);
        return result;
    }
    async update(id, objToUpdate) {
        let result = await this.repository.update(id, objToUpdate);
        return result;
    }
    async delete(id) {
        let result = await this.repository.delete(id);
        if(result)
            return result;
        else
            throw new IdError('the id is not exist');
    }
}
module.exports = BaseService;