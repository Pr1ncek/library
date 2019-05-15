const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.JWT_SECRET;

const searchUserByID = 'SELECT * FROM user WHERE user_id = ?';

module.exports = (passport, mysqlConnection) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        mysqlConnection.query(searchUserByID, payload.id, async function(err, res, fields) {
          const user = res[0];
          if (err) {
            return console.error(err.message);
          }
          if (!user) return done(null, false);
          return done(null, user);
        });
      } catch (error) {
        console.error(error);
      }
    })
  );
};
