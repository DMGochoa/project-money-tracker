const { User, UserSchema } = require('./user');
const { Account, AccountSchema } = require('./account');
const { Transaction, TransactionSchema } = require('./transaction');
const { TransactionType, TransactionTypeSchema } = require('./transactionType');
const { TransactionCategory, TransactionCategorySchema } = require('./transactionCategory');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Account.init(AccountSchema, Account.config(sequelize));
  Transaction.init(TransactionSchema, Transaction.config(sequelize));
  TransactionType.init(TransactionTypeSchema, TransactionType.config(sequelize));
  TransactionCategory.init(TransactionCategorySchema, TransactionCategory.config(sequelize));

  User.associate(sequelize.models);
  Account.associate(sequelize.models);
  TransactionType.associate(sequelize.models);
  TransactionCategory.associate(sequelize.models);
}

module.exports = { setupModels }
