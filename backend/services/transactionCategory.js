const { models } = require('../libs/sequelize');
const { verifyExistence } = require('../utils/verification');
const GeneralCrudService = require('./template/general_crud');

class TransactionCategoryService extends GeneralCrudService {
  constructor() {
    super('TransactionCategory', 'Transaction category not found');
  }
}

module.exports = TransactionCategoryService;
