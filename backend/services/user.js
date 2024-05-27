const { models } = require('../libs/sequelize');
const { verifyExistence } = require('../utils/verification');
const GeneralCrudService = require('./template/general_crud');

class UserService extends GeneralCrudService {
  constructor() {
    super('User', 'User not found');
  }
}

module.exports = UserService;
