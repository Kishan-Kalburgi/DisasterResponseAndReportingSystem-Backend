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

// push notification
var FCM = require('fcm-node')
var serverKey = require('../config/service-account.json') //put the generated private key path here    
var fcm = new FCM(serverKey)

var path = require("path")
var User = require("../model/user")



// file upload
var upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./views/dist/drrs/assets/upload");
    },
    filename: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      callback(null, Date.now() + ext);
    }
  }),
}).array("file");

router.post('/upload', function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(403).json({ message: err });
    }
    console.log(req.files)
    // res.send();
    if (req && !req.body) {
      return res.status(403).json({ msg: "Please provide applicant details" })
    }
    // var bodyData = JOSN req.body

    var userObj = new User(JSON.parse(req.body.data));
    req.files.forEach(ele => {
      userObj.files.push("/assets/upload/" + ele.filename);
    });
    userObj.save(function (err, data) {
      if (err) {
        res.status(403).json({ msg: "something bad", err: err })
      }
      else {
        res.status(200).json({ msg: "user record saved successfully", data: data })
      }
    });
  });
})



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Signin route for a user
router.route('/signin').post(users.signin, users.saveTokenNRespond);

// Signup route for a user
router.route('/signup').post(users.signup);

// Check user logged in or not
router.route('/isLoggedIn').get(users.isLoggedIn);


// save members- Hemanth
// These are the one who are selected for CERT team
router.post('/saveMembers', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide member details" })
  }
  var memberObj = new membere(req.body);
  memberObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Members record saved successfully", data: data })
    }
  });
})

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


// save applicant
// These are the one who are applying for CERT Team
router.post('/saveApplicant', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide applicant details" })
  }
  var applicantObj = new applicant(req.body);
  applicantObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "applicant record saved successfully", data: data })
    }
  });
})

router.put('/saveApplicationDecision', function (req, res, decision) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide applicant details" })
  }
  console.log(req.body._id)
  var id = req.body._id;
  applicant.findByIdAndUpdate(id, { $set: { role: req.body.role } }, { new: true }, function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
          res.status(200).json({ msg: "applicant decision updated successfully", data: data })
      
    }
  });
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

//last applicant record
router.get('/getapplicantLast',
  function (req, res, next) {
    applicant.find({}, function (err, results) {
      var lastRecord
      // console.log(results.length);
      if (results.length > 0) {
        lastRecord = results[results.length - 1]
      }
      if (err) {
        res.status(403).json({
          msg: "something bad",
          err
        })
      }
      else {
        res.status(200).json({
          msg: "applicant record fetched successfully", data: lastRecord
        })
      }
    })
  });

// save incident - kishan
router.post('/saveIncident', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide incident details" })
  }
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

// save report
router.post('/saveReport', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide details for report" })
  }
  var reportObj = new report(req.body);
  reportObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Report saved successfully", data: data })
    }
  });
})

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

  report.find({incidentName:req.params.id}, function (err, results) {
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

// router.get('/getTeamsById/:id', function (req, res, next) {

//   report.find({incidentName:req.params.id}, function (err, results) {
//     // Cheks for an error 
//     if (err) {
//       // Displays an error message
//       res.status(403).json({ msg: "something bad", err })
//     }
//     // if no error 
//     else {
//       // fetches the respective requested record successfully
//       res.status(200).json({ msg: "teams fetched successfully", data: results })
//     }
//   })
// });


//save team-Sreevani Anoohya Tadiboina
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

//get team list-Sreevani Anoohya Tadiboina
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
router.get('/certification', function (req, res, next) {
  // fetches the respective requested record successfully
  res.download("./public/assets/cert-certificate.jpg");
});

module.exports = router;