const express = require("express");
const app = express();
const votingRoutes = express.Router();
var nodemailer = require('nodemailer');

// Require Member model in our routes module
let Member = require("../models/member");
let Constitution = require("../models/Constitution");
let Candidate = require("../models/Candidate");
let mongo = require("mongoose");
// Defined store route 
votingRoutes.route("/add/constitution").post(function (req, res) {
  let constitution = new Constitution(req.body);
  constitution
    .save()
    .then(game => {
      res.status(200).json({ constitution: "constitution is added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

votingRoutes.route("/add/candidate").post(function (req, res) {
  let candidate = new Candidate(req.body);
  candidate
    .save()
    .then(game => {
      res.status(200).json({ candidate: "candidate is added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


votingRoutes.route("/send/mailtocitizen").post(function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});


// Defined get data(index or listing) route
votingRoutes.route("/get/candidates").get(function (req, res) {
  Candidate.find(function (err, members) {
    if (err) {
      console.log(err);
    } else {
      res.json(members);
    }
  });
});

votingRoutes.route("/get/constitutions").get(function (req, res) {
  Constitution.find(function (err, members) {
    if (err) {
      console.log(err);
    } else {
      res.json(members);
    }
  });
});

// // Defined edit route
// votingRoutes.route("/edit/:id").get(function (req, res) {
//   let id = req.params.id;
//   Member.findById(id, function (err, memberById) {
//     res.json(memberById);
//   });
// });

// //  Defined update route
// votingRoutes.route("/update/:id").post(function (req, res) {
//   Member.findById(req.params.id, function (err, member) {
//     if (!member) return next(new Error("Could not load Document"));
//     else {
//       member.name = req.body.name;
//       member.address = req.body.address;
//       member.contact = req.body.contact;
//       member.about_member = req.body.about_member;
//       member.email = req.body.email;
//       member
//         .save()
//         .then(member => {
//           res.json("Update complete");
//         })
//         .catch(err => {
//           res.status(400).send("unable to update the database");
//         });
//     }
//   });
// });

// Defined delete | remove | destroy route
// votingRoutes.route("/delete/:id").get(function (req, res) {
//   Member.findByIdAndRemove({ _id: req.params.id }, function (err, member) {
//     if (err) res.json(err);
//     else res.json("Successfully removed");
//   });
// });

votingRoutes.route("/delete/constitution").post(function (req, res) {
  Constitution.remove({ _id: req.body._id }, function (err, member) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});
votingRoutes.route("/delete/candidate").post(function (req, res) {
  Candidate.remove({ _id: req.body._id }, function (err, member) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = votingRoutes;
