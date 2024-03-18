class CustomError {
  constructor(statusCode = 500, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.name = 'CustomError';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
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

module.exports = CustomError;
