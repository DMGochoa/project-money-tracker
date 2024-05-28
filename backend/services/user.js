const { models } = require('../libs/sequelize');
const { verifyExistence } = require('../utils/verification');
const GeneralCrudService = require('./template/general_crud');
const bcrypt = require('bcrypt');


class UserService extends GeneralCrudService {
  constructor() {
    super('User', 'User not found');
  }

  async create(data) {
    data.password = await this.encryptPassword(data.password);
    const newUser = await super.create(data);
    delete newUser.password;
    return newUser;
  }

  async update(id, data) {
    console.log(data);
    if (data.password) {
      data.password = await this.encryptPassword(data.password);
      console.log(data)
    }
    const updatedUser = super.update(id, data);
    delete updatedUser.password;
    return updatedUser;
  }

  async getUserByEmail(email) {
    const user = await models.User.findOne({ where: { email } });
    verifyExistence(user, 'User not found');
    return user;
  }

  async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}

module.exports = UserService;
