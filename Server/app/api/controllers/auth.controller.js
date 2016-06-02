/**
 * Created by luis on 6/1/2016.
 */
var User= require('../../models/user');
var jwt = require('jwt-simple');
var config = require('../../../config/database'); // get db config file

// create a new user account (POST http://localhost:3000/api/signup)
exports.signup=function(req, res) {
    if (!req.body.firstName || !req.body.password || !req.body.email || !req.body.lastName) {
        res.status(401).json({success: false, msg: 'Please pass all the information.'});
    } else {
        var newUser = new User(req.body);
        // save the user
        newUser.save(function(err) {
            if (err) {
                return res.status(401).json({success: false, msg: 'Email already exist'});
            }
            var token = jwt.encode(newUser._id, config.secret);
            res.status(200).json({success: true, msg: 'Successful created new user.', token: 'JWT ' + token});
        });
    }
};

// route to authenticate a user (POST http://localhost:3000/api/authenticate)
exports.authenticate=function(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) throw err;

        if (!user||err) {
            res.status(401).send({success: false, msg: 'Authentication failed.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user._id, config.secret);
                    // return the information including token as JSON
                    res.status(200).json({success: true, token: 'JWT ' + token});
                } else {
                    res.status(401).json({success: false, msg: 'Authentication failed.'});
                }
            });
        }
    });
};

