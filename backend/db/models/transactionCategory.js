const { Model, DataTypes, Sequelize } = require('sequelize');

const TRANSACTION_CATEGORY_TABLE = 'transaction_categories';

const TransactionCategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    fiels: 'created_at',
    defaultValue: Sequelize.NOW
  },
}

class TransactionCategory extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTION_CATEGORY_TABLE,
      modelName: 'TransactionCategory',
      timestamps: false
    }
  }
}

module.exports = { TransactionCategory, TransactionCategorySchema, TRANSACTION_CATEGORY_TABLE };
