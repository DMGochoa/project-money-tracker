const express = require('express');

const transactionCategoryRouter = require('./transactionCategory');
const transactionTypeRouter = require('./transactionType');
const transactionRouter = require('./transaction');
const accountRouter = require('./account');
const userRouter = require('./user');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/transactionCategory', transactionCategoryRouter);
  router.use('/transactionType', transactionTypeRouter);
  router.use('/transaction', transactionRouter);
  router.use('/account', accountRouter);
  router.use('/user', userRouter);
}

module.exports = routerApi;
