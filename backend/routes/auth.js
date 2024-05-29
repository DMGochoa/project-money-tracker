const express = require('express');
const passport = require('passport');
const AuthService = require('./../services/auth');

const authService = new AuthService();
const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      user = req.user;
      const token = await authService.signToken(user);
      res.json(
        {
          user,
          token
        });
    } catch (error) {
      next(error);
    }
  }
)

router.post(
  '/recovery',
  // faltaria un schema para verificar que el email es un email
  async (req, res, next) => {
    try {
      const { email } = req.body;
      console.log(email);
      const response = await authService.sendRecovery(email);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/change-password',
  // faltaria un schema para verificar que el token y el newPassword son correctos
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      console.log(email);
      const response = await authService.changePassword(token, newPassword);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
