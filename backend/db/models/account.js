const { Model, DataTypes, Sequelize } = require('sequelize');

const ACCOUNT_TABLE = 'accounts';

const AccountSchema = {
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
  interest: {
    allowNull: true,
    type: DataTypes.DECIMAL
  },
  managementFee: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  cutOff: {
    allowNull: false,
    type: DataTypes.DATE
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    fiels: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Account extends Model {
  static associate(models) {
    this.hasMany(models.Transaction, {
      as:'transactions',
      foreignKey: 'accountId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACCOUNT_TABLE,
      modelName: 'Account',
      timestamps: false
    }
  }
}

module.exports = { Account, AccountSchema, ACCOUNT_TABLE };
