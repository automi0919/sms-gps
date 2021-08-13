var nodemailer = require('nodemailer');
const config = require('../config');

const createMailService = (from, password) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: from,
      pass: password
    },
    secureConnection: false, 
    tls:{
      rejectUnauthorized:false,
      ciphers:'SSLv3',
      requireTLS:true
    }
  });

  transporter.sendEmail = (name, text) => {
    var mailOptions = {
      from,
      to: config.emailAddress,
      subject: `SAFE LOCATE MESSAGE \n ${name} sent message.`,
      text
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return {
          success: false,
          error: error
        }
      } else {
        console.log('Email sent: ' + info.response);
        return {
          success: true
        }
      }
    });

  }
  return transporter;
}

module.exports = {
  createMailService
}