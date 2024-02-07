const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.mobileMoney = require("./MobileMoney.model.js")(mongoose);
db.notification = require("./Notification.model.js")(mongoose);
db.offreSpeciale = require("./OffreSpeciale.model.js")(mongoose);
db.paiement = require("./Paiement.model.js")(mongoose);
db.preference = require("./Preference.model.js")(mongoose);
db.rappel = require("./Rappel.model.js")(mongoose);
db.rendezVous = require("./RendezVous.model.js")(mongoose);
db.service = require("./Service.model.js")(mongoose);
db.user = require("./User.model.js")(mongoose);

module.exports = db;