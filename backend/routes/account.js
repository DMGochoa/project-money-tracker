const express = require('express');

const AccountService = require('../services/account');
validatorHandler = require('../middlewares/validatorHandler');
const { createAccountSchema, updateAccountSchema } = require('../schemas/account');
const { getSchema } = require('../schemas/template/getschema');

const router = express.Router();
const service = new AccountService();

router.get('/',
  async (req, res, next) => {
    try {
      const result = await service.getAll();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await service.getById(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createAccountSchema, 'body'),
  async (req, res, next) => {
    try {
      const account = req.body;
      const result = await service.create(account);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSchema, 'params'),
  validatorHandler(updateAccountSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const account = req.body;
      const result = await service.update(id, account);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await service.delete(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
