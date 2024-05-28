const express = require('express');

const transactionCategoryRouter = require('./transactionCategory');
const transactionTypeRouter = require('./transactionType');
const transactionRouter = require('./transaction');
const accountRouter = require('./account');
const userRouter = require('./user');
const authRouter = require('./auth');
const passport = require('passport');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/transactionCategory',
    passport.authenticate('jwt', { session: false }),
    transactionCategoryRouter);
  router.use('/transactionType',
    passport.authenticate('jwt', { session: false }),
    transactionTypeRouter);
  router.use('/transaction',
    passport.authenticate('jwt', { session: false }),
    transactionRouter);
  router.use('/account',
    passport.authenticate('jwt', { session: false }),
    accountRouter);
  router.use('/user', userRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
