const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('./../../../config/db');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const JwtStrategy = new Strategy(options, async (payload, done) => {
  try {
    if (!payload.isActive) {
      return done(null, false);
    }
    return done(null, payload);
  } catch (error) {
    return done(error);
  }
});

module.exports = JwtStrategy;
