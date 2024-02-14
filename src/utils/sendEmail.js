const nodemailer = require('nodemailer');

const sendEmail = (options) => {

   const transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: process.env.EMAIL,
           pass: process.env.PASSWORD
       },
       tls: {
           rejectUnauthorized: false
       },
   });

   const mailOptions = {
       from: process.env.EMAIL,
        ...options
}

   transporter.sendMail(mailOptions, function (error, info) {
       if (error) {
           console.log(error);
       } else {
           console.log('Email sent: ' + info.response);
       }
   });
}

module.exports = { sendEmail }