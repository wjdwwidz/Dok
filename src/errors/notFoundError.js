const CustomError = require('./customError');

class NotFoundError extends CustomError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }
  }
}

module.exports = NotFoundError;
