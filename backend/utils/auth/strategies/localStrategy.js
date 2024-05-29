const { Strategy } = require('passport-local');

const AuthService = require('./../../../services/auth');
const authService = new AuthService();


const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async function(username, password, done) {
    try {
      const user = authService.getUser(username, password);
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
)

module.exports = LocalStrategy;
