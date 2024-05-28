const jwt = require('jsonwebtoken');
const { config } = require('./../../config/db');

function jwtSign(payload) {
  return jwt.sign(
    payload,
    config.jwtSecret,
    { expiresIn: '1d' });
}

module.exports = jwtSign;
