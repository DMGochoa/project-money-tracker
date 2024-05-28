const boom = require('@hapi/boom');
const { config } = require('./../config/db')

function checkApiKey(req, res, next) {
  const apiKey = req.get('apiKey');
  if (apiKey !== config.apiKey) {
    next(boom.unauthorized('apiKey is required'));
  } else {
    next();
  }
}

module.exports = { checkApiKey };
