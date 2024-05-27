const Joi = require('joi');

const username = Joi.string().min(3).max(50);
const email = Joi.string().email();
const password = Joi.string().min(6).max(50);
const isActive = Joi.boolean();

const createUserSchema = Joi.object({
  username: username.required(),
  email: email.required(),
  password: password.required(),
  isActive
});

const updateUserSchema = Joi.object({
  username,
  email,
  password,
  isActive
});

module.exports = { createUserSchema, updateUserSchema }
