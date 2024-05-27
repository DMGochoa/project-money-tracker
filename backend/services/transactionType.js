const { models } = require('../libs/sequelize');
const { verifyExistence } = require('../utils/verification');
const GeneralCrudService = require('./template/general_crud');

class TransactionTypeService extends GeneralCrudService {
  constructor() {
    super('TransactionType', 'Transaction type not found');
  }
}

module.exports = TransactionTypeService;
