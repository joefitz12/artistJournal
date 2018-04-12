const db = require("../models");
const email = require("../notifications/email");

// Defining methods for the artistsController
module.exports = {
  login: function (req, res) {
    db.Artist
      .findOneAsync({ email: req.body.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAllEmail: function (req, res) {
    console.log("getAllEmail hit");
    db.Artist
      .findAsync({ emailNotifications: true })
      .then(notificationAccounts => {
        notificationAccounts.forEach(account => {
          let mailOptions = {
            from: 'artistJournalApp@gmail.com',
            to: account.email,
            subject: 'time to freewrite!',
            text: 'become the artist you were born to be. freewrite today!'
          };

          email.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        });
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Artist
      .findByIdAsync(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Artist
      .createAsync(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Artist
      .findOneAndUpdateAsync({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Artist
      .findByIdAsync({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
