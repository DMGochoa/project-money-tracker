const { Strategy } = require('passport-local');
const { boom } = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../../services/user')
const userService = new UserService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async function(username, password, done) {
    try {
      const user = await userService.getUserByEmail(username);
      if (!user) {
        return done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(boom.unauthorized(), false);
      }

      //delete user.password;
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
)

module.exports = LocalStrategy;
