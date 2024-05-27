const { models } = require('../libs/sequelize');
const { verifyExistence } = require('../utils/verification');
const GeneralCrudService = require('./template/general_crud');

class AccountService extends GeneralCrudService {
  constructor() {
    super('Account', 'Account not found');
  }
}

module.exports = AccountService;
