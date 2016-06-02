/**
 * Created by luis on 6/1/2016.
 */

var User= require('../../models/user');
var config = require('../../../config/database'); // get db config file
var request = require('request');
var jwt = require('jwt-simple');

//Route to add transaction
exports.addTransactions=function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findById({
            _id: decoded
        }, function(err, user) {
            if (err) throw err;
            if (!user) {
                return res.status(401).send({success: false, msg: 'Authentication failed.'});
            } else {
                request('https://openexchangerates.org/api/historical/'+req.body.date+'.json?app_id=e8c8f78f7e5a4ae49a780207d1a35bf5', function (error, response, body) {
                    var rates=JSON.parse(body).rates;
                    var trans=user.transactions.create(req.body);
                    trans.rates={USD:rates.USD,MXN:rates.MXN,EUR:rates.EUR,CAD:rates.CAD,CNY:rates.CNY,INR:rates.INR};
                    user.transactions.push(trans);
                    if(error){
                        return res.status(400).send({success: false, msg: "Couldn't store transaction"});
                    }
                    user.save(function (err) {
                        if (err) return res.status(403).send({success: false, msg: 'Authentication failed.'});
                        res.status(200).json({success: true,transactions:trans});
                    });

                });

            }
        });
        //  res.json({success: true, msg: 'Welcome in the member area  !'});
    } else {
        return res.status(403).send({success: false, msg: 'No token provided.'});
    }
};

//Route to add transaction
exports.editTransactions=function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findById({
            _id: decoded
        }, function(err, user) {
            if (err) throw err;
            if (!user) {
                return res.status(401).send({success: false, msg: 'Authentication failed.'});
            } else {
                request('https://openexchangerates.org/api/historical/'+req.body.date+'.json?app_id=e8c8f78f7e5a4ae49a780207d1a35bf5', function (error, response, body) {
                    var rates=JSON.parse(body).rates;
                    var doc = user.transactions.id(req.body._id);
                    doc.amount = req.body.amount;
                    doc.company = req.body.company;
                    doc.date = req.body.date;
                    doc.type = req.body.type;
                    doc.rates=rates;
                    user.save(function (err) {
                        if (err) return res.status(403).send({success: false, msg: 'Authentication failed.'});
                        res.status(200).json({success: true, transactions: doc});
                    });
                })
            }
        });
        //  res.json({success: true, msg: 'Welcome in the member area  !'});
    } else {
        return res.status(403).send({success: false, msg: 'No token provided.'});
    }
};




// route to a restricted info (GET http://localhost:8080/api/memberinfo)
exports.transactions= function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        var decoded = jwt.decode(token, config.secret);
        User.findById({
            _id: decoded
        }, function(err, user) {
            if (err) throw err;
            if (!user) {
                return res.status(403).send({success: false, msg: 'Authentication failed.'});
            } else {
                res.status(200).json({success: true, msg: 'Welcome in the member area ' + user.name + '!',transactions:user.transactions});
            }
        });
    } else {
        return res.status(403).send({success: false, msg: 'No token provided.'});
    }
};

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};
