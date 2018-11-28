var express = require('express');
var router = express.Router();
var applicant = require("../model/applicant");
var incident = require("../model/incident");
var report = require("../model/report");
var membere = require("../model/members");
var team = require("../model/team");
var signup = require("../model/signup")
var users = require('../controller/user-controller')
var multer = require('multer')
var nodemailer = require('nodemailer');
// push notification
var FCM = require('fcm-node')
var serverKey = require('../config/service-account.json') //put the generated private key path here    
var fcm = new FCM(serverKey)

var path = require("path")
var User = require("../model/user")

// testing file save below

router.post('/saveApplicant', (req, res) => {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide applicant details" })
  }
  upload(req, res, function (err) {
    if (err) {
      return res.status(403).json({ message: err });
    }
    // console.log(req.files)
    var applicantObj = new applicant(JSON.parse(req.body.formData));
    console.log(applicantObj)
    applicantObj.save(function (err, data) {
      if (err) {
        res.status(403).json({ msg: "something bad", err: err })
      }
      else {
        res.status(200).json({ msg: "user record saved successfully", data: data })
      }
    });

    console.log("Json value is " + req.body.formData)
    console.log("limitation value is " + req.body.formData.limitations)
  });


});
// file upload
var upload = multer({
  storage: multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, "./public/assets/upload")
    },
    filename: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      console.log("file ext is " + file.originalname)
      callback(null, file.originalname // +Date.now() 
      );
    }
  }),
}).array("files");



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Signin route for a user
router.route('/signin').post(users.signin, users.saveTokenNRespond);

// Signup route for a user
router.route('/signup').post(users.signup);

router.route('/resetPassword/:email').get(users.resetPassword);

router.route('/updatePassword/:tempPassword/:newPassword').get(users.updatePassword);

// Check user logged in or not
router.route('/isLoggedIn').get(users.isLoggedIn);

// get member List- Hemanth
// These are the one who are selected for CERT team
router.get('/getMemberList', function (req, res, next) {
  membere.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "member record fetched successfully", data: results })
    }
  })
});

router.get('/getUser/:email', function (req, res, next) {
  User.find({email:req.params.email}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "user record fetched successfully", data: results })
      console.log(results)
    }
  })
});



router.put('/saveApplicationDecision', function (req, res, decision) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide applicant details" })
  }

  var id = req.body._id;
  // applicant.findOneAndUpdate({email:"aron@gmail.com"}, { $set: { email:"aron@yahoos.com" } }, { new: true }, function (err, data) {
  applicant.findByIdAndUpdate(id, { $set: { role: req.body.role } }, { new: true }, function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "applicant decision updated successfully", data: data })
    }
  });

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
var maillist=[req.body.email,'vineeth.agarwal06@gmail.com']
// setup email data with unicode symbols
maillist.toString
console.log("mail list "+maillist+" email is "+req.body.email)
var decisionSubject=""
var decisionMessage=""
if(req.body.role=="AcceptedApplicant"){
  decisionSubject="accepted"
  decisionMessage='Dear Applicant, <br><br> Congratulations! Your application has been accepted as a CERT member. Please access the mobile application to serve to the CERT teams in future. <br><br> Thanks & Regards, <br>Team DRRS'
}
else{
  if(req.body.role=="RejectedApplicant"){
    decisionSubject="rejected"
    decisionMessage='Dear Applicant, <br><br> We feel sorry to inform you that your application has been not been accepted as a CERT member at this moment. If interested, please apply again in 3 months.  <br><br> Thanks & Regards, <br>Team DRRS'
  }
}

let mailOptions = {
  from: '"Booo Surprise👻" <s530488@nwmissouri.edu>', // sender address
  // to: 'vineeth.agarwal06@gmail.com',req.body.role // list of receivers
  to: maillist, // list of receivers
  subject: 'DRRS application '+decisionSubject, // Subject line
  text: '', // plain text body
  html: decisionMessage // html body
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
})

// get applicants List
// These are the one who are applying for CERT Team
router.get('/getApplicantsList', function (req, res, next) {
  console.log("entered here")
  applicant.find({ role: "Applicant" }, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "applicant record fetched successfully", data: results })
    }
  })
});

// get members List
// These are the one who are applying for CERT Team
router.get('/getMembersList', function (req, res, next) {
  console.log("entered here")
  applicant.find({ role: "AcceptedApplicant" }, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "members record fetched successfully", data: results })
    }
  })
});

router.get('/getRejectedMembersList', function (req, res, next) {
  console.log("entered here")
  applicant.find({ role: "RejectedApplicant" }, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "members record fetched successfully", data: results })
    }
  })
});

// save incident - kishan
router.post('/saveIncident', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide incident details" })
  }
  console.log(req.body)
  var incidentObj = new incident(req.body);
  // push notification
  const messageDetails = {
    //this may vary according to the message type 
    //(single recipient, multicast, topic, et cetera)
    to: 'nfy2UVCZsNss:APA91bG3yEWGcoopGCBTrgDlOINvCwwh3UEM_8vbyYjXJV2Uz4vEyBh6uNMm_RawJ0X5v8b8dTsd0TgPBAeQWbplNgba-DBKRkGbqYJIpvy3UnoXu_ZVP38Fogf7NIYWbV-RkHtGWwCW',
    data: {
      title: 'Disaster has Occurred',
      body: 'Are you available ?'
    },
  }
  incidentObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      fcm.send(messageDetails, function (err, response) {
        if (err) {
          console.log("Something has gone wrong!", err)
          res.status(200).json({ msg: "incident record saved successfully - no message", data: err })
        } else {
          console.log("Successfully sent with response: ", response)
          res.status(200).json({ msg: "incident record saved successfully", data: data })
        }
      })

    }
  });
})

// get incident - kishan
router.get('/getIncidentsList', function (req, res, next) {
  incident.find({ isActive: 'true' }, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      console.log(results)
      res.status(200).json({ msg: "Incident record fetched successfully", data: results })
    }
  })
});

// get archive incident - kishan
router.get('/getArchiveIncidents', function (req, res, next) {
  incident.find({ isActive: 'false' }, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      console.log(results)
      res.status(200).json({ msg: "Incident record fetched successfully", data: results })
    }
  })
});

// archive incident
router.put('/archiveIncident', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide details for report" })
  }
  incident.findByIdAndUpdate(req.body, { isActive: 'false' }, function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Incident updated successfully", data: data })
    }
  });
})

// DeleteTeam
router.put('/deleteTeam', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide details for report" })
  }
  team.findByIdAndUpdate(req.body, { isActive: 'false' }, function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Team deleted successfully", data: data })
    }
  });
})

// save report
router.post('/saveReport', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide details for report" })
  }
  upload(req, res, function (err) {
    if (err) {
      return res.status(403).json({ message: err });
    }

    var reportObj = new report(JSON.parse(req.body.formData));
    reportObj.save(function (err, data) {
      if (err) {
        res.status(403).json({ msg: "something bad", err: err })
      }
      else {
        res.status(200).json({ msg: "Report saved successfully", data: data })
      }
    });
    console.log("Json value is " + req.body.formData)
    // console.log("limitation value is "+req.body.formData.limitations)    
  });


});

// get reports List
router.get('/getReportsList', function (req, res, next) {
  report.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "Reports are fetched successfully", data: results })
    }
  })
});

// get report by id
router.get('/getReportById/:id', function (req, res, next) {
  report.find({ incidentName: req.params.id }, function (err, results) {
    // Cheks for an error 
    if (err) {
      // Displays an error message
      res.status(403).json({ msg: "something bad", err })
    }
    // if no error 
    else {
      // fetches the respective requested record successfully
      res.status(200).json({ msg: "team record fetched successfully", data: results })
    }
  })
});

router.get('/getTeamsById/:id', function (req, res, next) {
  console.log(req.params.id);
  team.find({ incidentID: req.params.id, isActive: 'true' }, function (err, results) {
    // Cheks for an error 
    if (err) {
      // Displays an error message
      res.status(403).json({ msg: "something bad", err })
    }
    // if no error 
    else {
      // fetches the respective requested record successfully
      res.status(200).json({ msg: "teams fetched successfully", data: results })
    }
  })
});

//save team-Sreevani Anoohya Tadiboina
router.put('/updateTeam', function (req, res, next) {
  // Cheks of the request has been made and the request has no body
  if (req && !req.body) {
    // returns a message asking the user to enter the team details
    return res.status(403).json({ msg: "Please provide team details" })
  }
  // Creating an object for the team model
  var id = req.body._id;
  delete req.body._id;
  
  // var teamObj = new team();
  team.updateOne({_id : id}, req.body, { new: true },function (err, data) {
    // Checks for an error 
    if (err) {
      // Displaying an error message 
      res.status(403).json({ msg: "something bad", err: err })
    }
    // if no error message
    else {
      // Saves the data successfully
      res.status(200).json({ msg: "team record updated successfully", data: data })
    }
  });
})

//Update team-Sreevani Anoohya Tadiboina
router.post('/saveTeam', function (req, res, next) {
  // Cheks of the request has been made and the request has no body
  if (req && !req.body) {
    // returns a message asking the user to enter the team details
    return res.status(403).json({ msg: "Please provide team details" })
  }
  // Creating an object for the team model
  var teamObj = new team(req.body);

  teamObj.save(function (err, data) {
    // Checks for an error 
    if (err) {
      // Displaying an error message 
      res.status(403).json({ msg: "something bad", err: err })
    }
    // if no error message
    else {
      // Saves the data successfully
      res.status(200).json({ msg: "team record saved successfully", data: data })
    }
  });
})

// get team list-Sreevani Anoohya Tadiboina
router.get('/getTeamList', function (req, res, next) {
  team.find({}, function (err, results) {
    // Cheks for an error 
    if (err) {
      // Displays an error message
      res.status(403).json({ msg: "something bad", err })
    }
    // if no error 
    else {
      // fetches the respective requested record successfully
      res.status(200).json({ msg: "team record fetched successfully", data: results })
    }
  })
});

// get team by id
router.get('/getTeam/:id', function (req, res, next) {
  team.findById(req.params.id, function (err, results) {
    // Cheks for an error 
    if (err) {
      // Displays an error message
      res.status(403).json({ msg: "something bad", err })
    }
    // if no error 
    else {
      // fetches the respective requested record successfully
      res.status(200).json({ msg: "team record fetched successfully", data: results })
    }
  })
});

// report generator
router.get('/incidentReport', function (req, res, next) {
  // fetches the respective requested record successfully
  res.download("./public/assets/incidentsReport.xlsx");
});

// certification
router.get('/certification/:id', function (req, res, next) {
  // fetches the respective requested record successfully

  console.log("enered certification" + req.params.id)
  res.status(200).download("./public/assets/upload/" + req.params.id);
});


module.exports = router;
