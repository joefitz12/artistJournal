var nodemailer = require('nodemailer');

var Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'artistjournalapp@gmail.com',
      pass: 'XXXXXXXXXXXXXXX'
    }
  });

  module.exports = Transporter;
