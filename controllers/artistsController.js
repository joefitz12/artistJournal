const db = require("../models");
const email = require("../notifications/email")

// Defining methods for the artistsController
module.exports = {
  login: function (req, res) {
    db.Artist
      .findOne({ email: req.body.email })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getAllEmail: function () {
    db.Artist
      .find({ emailNotifications: true })
      .then(notificationAccounts => {
        notificationAccounts.forEach(account => {
          let mailOptions = {
            from: 'artistJournalApp@gmail.com',
            to: account.email,
            subject: 'Time to Freewrite!',
            text: 'Become the artist you were born to be. Freewrite today!'
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
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Artist
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Artist
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Artist
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
