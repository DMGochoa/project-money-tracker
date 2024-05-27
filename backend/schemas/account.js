const Joi = require('joi');

const name = Joi.string().min(3).max(50);
const interest = Joi.number().positive();
const managementFee = Joi.number().positive();
const cutOff = Joi.date();

const createAccountSchema = Joi.object({
  name: name.required(),
  interest,
  managementFee: managementFee.required(),
  cutOff: cutOff.required()
});

const updateAccountSchema = Joi.object({
  name,
  interest,
  managementFee,
  cutOff
});

module.exports = { createAccountSchema, updateAccountSchema }
