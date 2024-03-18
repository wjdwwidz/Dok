const CustomError = require('./customError.js');

class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(message) {
    super(statusCode, message);
    this.name = 'NotFoundError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
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

module.exports = NotFoundError;
