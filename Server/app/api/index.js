/**
 * Created by luis on 6/1/2016.
 */
var express= require("express");
var router = new express.Router();
var authController = require('./controllers/auth.controller.js');
var currencyController = require('./controllers/currency.controller.js');
var transactionController = require('./controllers/transaction.controller.js');
var passport	= require('passport');

router.post('/signup', authController.signup);
router.post('/authenticate',authController.authenticate);
router.post('/addTransactions', passport.authenticate('jwt', { session: false}),transactionController.addTransactions);
router.post('/editTransactions', passport.authenticate('jwt', { session: false}),transactionController.editTransactions);
router.get('/transactions', passport.authenticate('jwt', { session: false}),transactionController.transactions);
router.get('/getCurrency', passport.authenticate('jwt', { session: false}),currencyController.getCurrency);


module.exports=router;