const CustomError = require('./customError');

class SystemError extends CustomError {
  constructor(message) {
    super(422, message);
    this.name = 'SystemError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SystemError);
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

module.exports = SystemError;
