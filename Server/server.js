/**
 * Created by luis on 5/24/2016.
 */
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var mongoose  = require("mongoose");
var passport	= require('passport');

var config      = require('./config/database'); // get db config file

var app = express();
var port = process.env.PORT || 3000;
var jwt  = require('jwt-simple');
// Connect to MongoDB
mongoose.connect(config.database, {
    options: {
        db: {
            safe: true
        }
    }
});

mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});

app.use(function(req, res, next) {
    if(req.method=='OPTIONS'){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
        res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");

        res.status(204).end();
    }else{
        res.header("Access-Control-Allow-Origin", "*");
        next();
    }


});


app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// demo Route (GET http://localhost:3000)
app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

//Configure passport
require("./config/passport")(passport);

// connect the api routes under /api/*
app.use('/api', require("./app/api"));

// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);