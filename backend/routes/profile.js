const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      user = req.user;
      payload = {
        sub: user.id,
        isActive: user.isActive,
        role: user?.role || 'admin',
      }
      const token = jwtSign(payload)
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

module.exports = router;
