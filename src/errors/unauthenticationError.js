const CustomError = require('./customError.js');

class UnauthenticationError extends CustomError {
  statusCode = 401;
  constructor(message) {
    super(statusCode, message);
    this.name = 'UnauthenticationError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnauthenticationError);
    }
  }
  getMessage() {
    return {
      error: this.name,
      message: this.message,
    };
  }

  getStatusCode() {
    return this.statusCode;
  }
}

module.exports = UnauthenticationError;
