const Joi = require('joi');

const typeId = Joi.number().integer().positive();
const categoryId = Joi.number().integer().positive();
const userId = Joi.number().integer().positive();
const accountId = Joi.number().integer().positive();
const description = Joi.string().min(3).max(200);
const amount = Joi.number().positive();
const date = Joi.date();

const createTransactionSchema = Joi.object({
  typeId: typeId.required(),
  categoryId: categoryId.required(),
  userId: userId.required(),
  accountId: accountId.required(),
  description: description.required(),
  amount: amount.required(),
  date: date.required()
});

const updateTransactionSchema = Joi.object({
  typeId,
  categoryId,
  userId,
  accountId,
  description,
  amount,
  date
});

module.exports = { createTransactionSchema, updateTransactionSchema }
