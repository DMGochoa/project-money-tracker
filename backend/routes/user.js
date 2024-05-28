const express = require('express');

const passport = require('passport');
const UserService = require('../services/user');
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema } = require('../schemas/user');
const { getSchema } = require('../schemas/template/getschema');

const router = express.Router();
const service = new UserService();

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
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const user = req.body;
      const result = await service.create(user);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = req.body;
      const result = await service.update(id, user);
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
