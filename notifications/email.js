var nodemailer = require('nodemailer');

var Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'artistjournalapp@gmail.com',
      pass: 'DgFuigGpbGyfU8HaBPUcoQxA'
    }
  });

  module.exports = Transporter;