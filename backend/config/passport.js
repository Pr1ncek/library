const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.JWT_SECRET;

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        // const user = await User.findById(payload.id);
        // if (!user) return done(null, false);
        const user = {};
        return done(null, user);
      } catch (error) {
        console.error(error);
      }
    })
  );
};
