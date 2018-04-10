//links artistsController, where the get routes for artists who opt in to daily notifications exists
const artistsController = require("./controllers/artistsController");
const email = require("../notifications/email");

//runs email notification function
artistsController.getAllEmail.exec()
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
    });