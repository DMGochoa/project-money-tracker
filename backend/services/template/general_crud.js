const { models } = require('./../../libs/sequelize');
const { verifyExistence } = require('./../../utils/verification');

class GeneralCrudService {
  constructor(modelName, notFoundMessage) {
    this.modelName = modelName;
    this.notFoundMessage = notFoundMessage;
  }

  async getAll() {
    const data = await models[this.modelName].findAll();
    verifyExistence(data, this.notFoundMessage, data.length === 0);
    return data;
  }

  async getById(id) {
    const data = await models[this.modelName].findByPk(id);
    verifyExistence(data, this.notFoundMessage);
    return data;
  }

  async create(data) {
    const newData = await models[this.modelName].create(data);
    return newData;
  }

  async update(id, data) {
    const oldData = await this.getById(id);
    const updatedData = await oldData.update(data);
    return updatedData;
  }

  async delete(id) {
    const data = await this.getById(id);
    await data.destroy();
    return { id };
  }
}

module.exports = GeneralCrudService;
