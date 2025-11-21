class AppError extends Error {
    
    constructor(message, statusCode) {
        // called each time when we call this class
        super(message); // the super class is called from class extended (Error)

        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        // this -> current Object; this.constructor -> AppError Class itself
        Error.captureStackTrace(this, this.constructor); 
    }
}

module.exports = AppError;