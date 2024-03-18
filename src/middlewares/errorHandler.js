module.exports = (err, req, res, next) => {
  if (!(err instanceof CustomError)) {
    err = new CustomError(err.message);
  }
  res.status(err.statusCode).send({
    message: err.message,
  });
};
