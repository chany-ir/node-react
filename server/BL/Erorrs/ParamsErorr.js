class ParamsError extends Error {
    constructor(type, params) {
        super(`${type} object must contain exactly ${params}`);
        this.name = 'ParamsError'; // שמו של סוג השגיאה
    }
}

module.exports = ParamsError;