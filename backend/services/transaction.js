const { models } = require('../libs/sequelize');
const { verifyExistence } = require('../utils/verification');
const GeneralCrudService = require('./template/general_crud');
const { AccountService } = require('./account');
const { TransactionCategoryService } = require('./transactionCategory');
const { UserService } = require('./user');
const { TransactionTypeService } = require('./transactionType');

class TransactionService extends GeneralCrudService {
  constructor() {
    super('Transaction', 'Transaction not found');
  }

  async getAllByUserId(userId) {
    const userService = new UserService();
    userService.getById(userId);
    const transactions = models[this.modelName].findAll({
      where: { userId },
    });
    return transactions;
  }

  async getAllByUserIdAndAccountId(userId, accountId) {
    const userService = new UserService();
    userService.getById(userId);
    const accountService = new AccountService();
    accountService.getById(accountId);
    const transactions = models[this.modelName].findAll({
      where: { userId, accountId },
    });
    return transactions;
  }

  async getAllByUserIdAndCategoryId(userId, categoryId) {
    const userService = new UserService();
    userService.getById(userId);
    const transactionCategoryService = new TransactionCategoryService();
    transactionCategoryService.getById(categoryId);
    const transactions = models[this.modelName].findAll({
      where: { userId, categoryId },
    });
    return transactions;
  }

  async getAllByUserIdAndType(typeId) {
    const userService = new UserService();
    userService.getById(userId);
    const transactionTypeService = new TransactionTypeService();
    transactionTypeService.getById(typeId);
    const transactions = models[this.modelName].findAll({
      where: { userId, typeId },
    });
    return transactions;
  }
}

module.exports = TransactionService;
