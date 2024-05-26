'use strict';

const { USER_TABLE, UserSchema } = require('./../models/user');
const { ACCOUNT_TABLE, AccountSchema } = require('./../models/account');
const { TRANSACTION_TABLE, TransactionSchema } = require('./../models/transaction');
const { TRANSACTION_TYPE_TABLE, TransactionTypeSchema } = require('./../models/transactionType');
const { TRANSACTION_CATEGORY_TABLE, TransactionCategorySchema } = require('./../models/transactionCategory');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(ACCOUNT_TABLE, AccountSchema);
    await queryInterface.createTable(TRANSACTION_TYPE_TABLE, TransactionTypeSchema);
    await queryInterface.createTable(TRANSACTION_CATEGORY_TABLE, TransactionCategorySchema);
    await queryInterface.createTable(TRANSACTION_TABLE, TransactionSchema);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(TRANSACTION_TABLE);
    await queryInterface.dropTable(TRANSACTION_CATEGORY_TABLE);
    await queryInterface.dropTable(TRANSACTION_TYPE_TABLE);
    await queryInterface.dropTable(ACCOUNT_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};
