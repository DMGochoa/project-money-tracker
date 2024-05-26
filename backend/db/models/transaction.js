const { Model, DataTypes, Sequelize } = require('sequelize');
const { TRANSACTION_TYPE_TABLE } = require('./transactionType');
const { TRANSACTION_CATEGORY_TABLE } = require('./transactionCategory');
const { USER_TABLE } = require('./user');
const { ACCOUNT_TABLE } = require('./account');
const TRANSACTION_TABLE = 'transactions';


const TransactionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  typeId: {
    field: 'type_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TRANSACTION_TYPE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TRANSACTION_CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  accountId: {
    field: 'account_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ACCOUNT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  amount: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Transaction extends Model {
  static associate(models) {
    this.belongsTo(models.TransactionType, {
      as: 'types'
    });
    this.belongsTo(models.TransactionCategory, {
      as: 'categories'
    });
    this.belongsTo(models.User, {
      as: 'users'
    });
    this.belongsTo(models.Account, {
      as: 'accounts'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTION_TABLE,
      modelName: 'Transaction',
      timestamps: false
    }
  }
}

module.exports = { Transaction, TransactionSchema, TRANSACTION_TABLE };
