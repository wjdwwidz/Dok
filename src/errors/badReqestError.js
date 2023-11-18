const CustomError = require('./customError');

/**
 * 클라이언트에서 필수 데이터를 누락했을 경우 발생하는 에러
 * 400 Bad Request
 */
class BadRequestError extends CustomError {
  constructor(message) {
    super(message, 400);

    this.name = 'BadRequestError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

module.exports = {
  BadRequestError,
};
