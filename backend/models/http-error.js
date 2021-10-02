class httpError extends Error{
    constructor(message, errorCode){
        super(message);
    };
};

module.exports = httpError;