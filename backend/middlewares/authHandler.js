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

function checkAdminRole(req, res, next) {
  const { role } = req.user;
  if (role !== 'admin') {
    next(boom.unauthorized('Admin role is required'));
  } else {
    next();
  }
}

function checkRoles(...roles) {
  return (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      next(boom.unauthorized('Role is required'));
    } else {
      next();
    }
  }
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
