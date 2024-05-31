const { Model, DataTypes, Sequelize } = require('sequelize');

const TRANSACTION_TYPE_TABLE = 'transaction_types';

const TransactionTypeSchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
}

class TransactionType extends Model {
  static associate(models) {
    this.hasMany(models.Transaction, {
      as:'transactions',
      foreignKey: 'typeId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACTION_TYPE_TABLE,
      modelName: 'TransactionType',
      timestamps: false
    }
  }
}

module.exports = { TransactionType, TransactionTypeSchema, TRANSACTION_TYPE_TABLE };
