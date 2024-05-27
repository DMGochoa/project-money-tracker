const express = require('express');

const TransactionService = require('./../services/transaction');
const {
  createTransactionSchema,
  updateTransactionSchema,
} = require('./../schemas/transaction');
const { getSchema } = require('./../schemas/template/getschema');

const validatorHandler = require('./../middlewares/validatorHandler');

const router = express.Router();
const service = new TransactionService();

router.get(
  '/',
  async (req, res, next) => {
    try {
      const transactions = await service.getAll();
      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const transaction = await service.getById(id);
      res.status(200).json(transaction);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/user/:userId/account/:accountId',
  validatorHandler(getSchema, 'params'),
  async (req, res, next) => {
    try {
      const { userId, accountId } = req.params;
      const transactions = await service.getAllByUserIdAndAccountId(
        userId,
        accountId
      );
      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/user/:userId/category/:categoryId',
  validatorHandler(getSchema, 'params'),
  async (req, res, next) => {
    try {
      const { userId, categoryId } = req.params;
      const transactions = await service.getAllByUserIdAndCategoryId(
        userId,
        categoryId
      );
      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/user/:userId/type/:typeId',
  validatorHandler(getSchema, 'params'),
  async (req, res, next) => {
    try {
      const { userId, typeId } = req.params;
      const transactions = await service.getAllByUserIdAndType(userId, typeId);
      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createTransactionSchema, 'body'),
  async (req, res, next) => {
    try {
      const transaction = req.body;
      const createdTransaction = await service.create(transaction);
      res.status(201).json(createdTransaction);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getSchema, 'params'),
  validatorHandler(updateTransactionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const transaction = req.body;
      const updatedTransaction = await service.update(id, transaction);
      res.status(200).json(updatedTransaction);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
