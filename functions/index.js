const functions = require("firebase-functions");
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

const app = express();

// middleware
app.use(cors());

// body parser middleware
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false }); // this is to handle URL encoded data
// end parser middleware

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 465,
  secure: true,
  auth: {
    user: 'shayanbagchi.9@gmail.com',
    pass: 'xxasshrayglktctv',
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", [parseUrl, parseJson], (req, res) => {
  let textBody = `FROM: ${req.body.name} EMAIL: ${req.body.email} MESSAGE: ${req.body.message}`;
    let htmlBody = `<h3>Subject: ${req.body.subject}</h3><p>From: ${req.body.name} <a href="mailto:${req.body.email}">${req.body.email}</a></p><p>${req.body.message}</p>`;
    let mail = {
      from: req.body.email, // sender address
      to: "shayanbagchi.9@gmail.com", // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
      subject: "Mail From Contact Form", // Subject line
      text: textBody,
      html: htmlBody
    };

    // send mail with defined transport object
    transporter.sendMail(mail, function (err, info) {
      if(err) {
        res.json({
          status: 'fail'
        })
      }
      else {
        res.json({
         status: 'success'
        })
      }
    });
});	

exports.app = functions.https.onRequest(app);