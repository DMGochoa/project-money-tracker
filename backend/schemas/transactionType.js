const Joi = require('joi');

const name = Joi.string().min(3).max(50);

const createTransactionTypeSchema = Joi.object({
  name: name.required()
});

const updateTransactionTypeSchema = Joi.object({
  name
});

module.exports = { createTransactionTypeSchema, updateTransactionTypeSchema }
