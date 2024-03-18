const CustomError = require('./customError.js');

class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(message) {
    super(statusCode, message);
    this.name = 'BadRequestError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
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

module.exports = {
  BadRequestError,
};
