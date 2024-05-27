const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      message: err.message,
      errors: err.errors.map((e) => ({
        message: e.message,
        field: e.path
      }))
    });
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
};
