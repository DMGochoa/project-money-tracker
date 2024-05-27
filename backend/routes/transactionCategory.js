const express = require('express');

const TransactionCategoryService = require('../services/transactionCategory');
validatorHandler = require('../middlewares/validatorHandler');
const { createTransactionCategorySchema, updateTransactionCategorySchema } = require('../schemas/transactionCategory');
const { getSchema } = require('../schemas/template/getschema');

const router = express.Router();
const service = new TransactionCategoryService();

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
  validatorHandler(createTransactionCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const transactionCategory = req.body;
      const result = await service.create(transactionCategory);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSchema, 'params'),
  validatorHandler(updateTransactionCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const transactionCategory = req.body;
      const result = await service.update(id, transactionCategory);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
