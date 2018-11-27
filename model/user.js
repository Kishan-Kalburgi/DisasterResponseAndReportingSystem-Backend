const mongoose = require("mongoose")
Schema = mongoose.Schema,
    crypto = require('crypto');

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requried: [true, "Please provide the First Name"]
    },
    lastName: {
        type: String,
        required: [true, "Please provide the Last Name"]
    },
    email: {
        type: String,
        // unique: true,
        required: [true, "Please provide the Email"]
    },
    dob: {
        type: Date
    },
    password: {
        type: String,
        required: [true, "Please provide the Password"]
    },
    mobileNumber: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    county: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    skills: {
        type: String
    },
    licenseNumber: {
        type: String
    },
    files: {
        type: [String]
    },
    limitations: {
        type: String
    },
    pushNotification: {
        type: String
    },
    salt: {
        type: String
    },
    token: {
        type: String,
    },
    role: {
        type: String,
        enum: ['ADMIN', 'APPLICANT', 'MEMBER'],
        default: 'APPLICANT',
    },  

    tempResetPassword: {
        type: String
    }
});

/**
 * Hook a pre save method to hash the password
 */
userSchema.pre('save', function (next) {
    var modelData = this;
    if (!modelData.salt && modelData.password && modelData.isModified('password')) {
        modelData.salt = crypto.randomBytes(16).toString('base64');
        modelData.password = modelData.hashPassword(modelData.password);
        next();
    }else{
        next();
    }
});


/**
 * Create instance method for hashing a password
 */
userSchema.methods.hashPassword = function (password) {
    if (this.salt && password) {
        return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64,'sha512').toString('base64');
    } else {
        return password;
    }
};

/**
 * Create instance method for authenticating user
 */
userSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};
module.exports = mongoose.model('user', userSchema);

module.exports.hashPassword = userSchema.methods.hashPassword;