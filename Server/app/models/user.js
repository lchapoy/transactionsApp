/**
 * Created by luis on 5/24/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/

// set up a mongoose models
var ratesSchema = new Schema({
    USD: {
        type: Number,
        required: true
    },
    EUR: {
        type: Number,
        required: true
    },
    CAD: {
        type: Number,
        required: true
    },
    MXN: {
        type: Number,
        required: true
    },
    CNY: {
        type: Number,
        required: true
    },
    INR: {
        type: Number,
        required: true
    }
});



// set up a mongoose models
var transactionSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    rates:ratesSchema
});



var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    transactions:[transactionSchema]
});



UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else{
        return next();
    }
});



UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports=mongoose.model('User', UserSchema);