const { boom } = require('@hapi/boom');

function verifyExistence(data, message, condition=false) {
  if (!data || condition) {
    throw boom.notFound(message);
  }
}

module.exports = { verifyExistence }
