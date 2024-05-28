const express = require('express');

const TransactionTypeService = require('../services/transactionType');
const validatorHandler = require('../middlewares/validatorHandler');
const { createTransactionTypeSchema, updateTransactionTypeSchema } = require('../schemas/transactionType');
const { getSchema } = require('../schemas/template/getschema');
const { checkRoles } = require('./../middlewares/authHandler')

const router = express.Router();
const service = new TransactionTypeService();

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
  checkRoles('admin', 'user'),
  validatorHandler(createTransactionTypeSchema, 'body'),
  async (req, res, next) => {
    try {
      const transactionType = req.body;
      const result = await service.create(transactionType);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSchema, 'params'),
  validatorHandler(updateTransactionTypeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const transactionType = req.body;
      const result = await service.update(id, transactionType);
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
