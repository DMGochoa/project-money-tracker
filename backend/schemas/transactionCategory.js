const Joi = require('joi');

const name = Joi.string().min(3).max(50);
const description = Joi.string().min(3).max(200);

const createTransactionCategorySchema = Joi.object({
  name: name.required(),
  description: description.required()
});

const updateTransactionCategorySchema = Joi.object({
  name,
  description
});

module.exports = { createTransactionCategorySchema, updateTransactionCategorySchema }
