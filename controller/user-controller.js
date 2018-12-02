var nodemailer = require('nodemailer');
var User = require('../model/user');
var applicant = require("../model/applicant");
const jwt = require('jsonwebtoken');

/**
 * Check whether user Logged in or not
 */
var isLoggedIn = function (req, res) {
  if (req && req.user) {
    var userData = req.user;
    userData.password = undefined;
    userData.salt = undefined;
    res.json({ code: 200, isLoggedIn: true, message: 'User is logged in' });
  } else {
    res.json({ code: 500, isLoggedIn: false, message: 'User  not logged in' });
  }

};

module.exports.isLoggedIn = isLoggedIn;

/**
 * Signin
 */
var signin = function (req, res, next) {
  // Init user and add missing fields
  User.findOne({
    email: req.body.email
  }, '-__v -modifiedDate -createdDate')
    .exec(function (err, user) {
      if (err) {
        return res.status(389).json({ message: err });
      }
      if (!user || !user.authenticate(req.body.password)) {
        return res.status(389).json({ message: "Invalid email/password" });
      }
      req.session.user = user;
      next();
    });
};
module.exports.signin = signin;

/**
 * Save the access token and share with the frontend
 */
var saveTokenNRespond = function (req, res, next) {
  var token = jwt.sign({ expiresIn: '2m', data: req.session.user }, 'drrs');
  var user = new User(req.session.user);
  user.token = token

  user.save(function (err) {
    if (err) {/*
      console.log(err)*/
      res.status(389).json({ message: err });
    } else {
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;
      res.status(200).json({ message: "User signed in succeessfully", token: token });
    }
  });
};
module.exports.saveTokenNRespond = saveTokenNRespond;
/**
 * Signup 
 */
var signup = function (req, res) {
  // Init user and add missing fields

  var user = new User(req.body);
  console.log(req.body.email+" user email "+user.email)
  User.findOne({ email: req.body.email }, function (err, doc) {
    console.log("doc is "+doc)
    // doc is a Document
    if (doc==null) {/*
      console.log(err)*/
      user.save(function (err) {
        if (err) {/*
          console.log(err)*/
          res.status(389).json({ message: err });
        } else {
          res.status(200).json({ message: "User signed up successfully" });
        }
      });

    } else {
      res.status(401).json({ message: "User with this email exists already" });
    }
  });  // user.dob = new Date();  //harcoded
  console.log(user)
  // Then save the user
};
module.exports.signup = signup;


var updatePassword = function (req, res) {
  console.log("Entered update with email " + req.params.tempPassword + " " + req.params.newPassword);
  tempPWD = req.params.tempPassword
  newPWD = req.params.newPassword
  // find salt
  // var temp=User.find({tempResetPassword:"J3aE3F18Cb3"}, 'salt', function (err, docs) {
  // })
  var newPassword = ""
  User.findOne({ tempResetPassword: tempPWD }, function (err, doc) {
    // doc is a Document
    User.salt = doc.salt
    newPassword = User.hashPassword(newPWD)
    console.log("password is " + newPassword)

    User.findOneAndUpdate({ tempResetPassword: tempPWD }, { $set: { password: newPassword } }, { new: true }, function (err, data) {
      if (err) {
        res.status(403).json({ msg: "something bad", err: err })
      }
      else {
        res.status(200).json({ msg: "Temporary password saved successfully", data: data })
      }
    });
  });
};

// console.log(temp.email)
module.exports.updatePassword = updatePassword;


/**
 * Reset 
 */
var receivedEmail = ""

var resetPassword = function (req, res) {
  console.log("Entered reset with email " + req.params.email);
  receivedEmail = req.params.email
  tempResetPWD = resetPasswordEmail();
  User.findOneAndUpdate({ email: receivedEmail }, { $set: { tempResetPassword: tempResetPWD } }, { new: true }, function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Temporary password saved successfully", data: data })
    }
  });
};
module.exports.resetPassword = resetPassword;


function resetPasswordEmail() {
  // Email Logic
  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "s530488@nwmissouri.edu", // generated ethereal user
      pass: "TDqwXa2d4" // generated ethereal password
    }
  });
  var maillist = ['teamsynergic18@gmail.com', receivedEmail]
  // setup email data with unicode symbols
  maillist.toString
  console.log("mail list " + maillist)
  var tempArray = ["c", "1", 5, "J", "3", "aE", 3, "F", 1, 8, "C", "b", 3, "e", 7, "G", 2, "DZ", 3, "h", "9B", "2", "z", "A", "0B", "C0"]
  var tempResetPassword = ""
  var ran = Math.floor((Math.random() * 100) % 16)
  for (i = ran; i < ran + 10; i++) {
    tempResetPassword += tempArray[i]
  }
  // console.log(tempResetPassword)
  let mailOptions = {
    from: '"Booo Surprise👻" <s530488@nwmissouri.edu>', // sender address
    // to: 'vineeth.agarwal06@gmail.com',req.body.role // list of receivers
    to: maillist, // list of receivers
    subject: 'DRRS application password reset', // Subject line
    text: '', // plain text body
    html: "Your temporary password is " + tempResetPassword + ". Please use this in reset password page of mobile app to reet your password "// html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
  // Email Logic ends
  return tempResetPassword
}