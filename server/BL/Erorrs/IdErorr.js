class IdError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'IdError'; // שמו של סוג השגיאה
    }
}

module.exports = IdError;