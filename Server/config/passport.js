/**
 * Created by luis on 5/24/2016.
 */
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var User = require('../app/models/user');
var config = require('../config/database');

module.exports = function(passport) {
    var opts = {};
    opts.secretOrKey = config.secret;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne({id: jwt_payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};