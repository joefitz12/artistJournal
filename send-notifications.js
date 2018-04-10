//links artistsController, where the get routes for artists who opt in to daily notifications exists
const artistsController = require("./controllers/artistsController");

//runs email notification function
artistsController.getAllEmail();