const express = require("express");
const router = express.Router();
const personne_moraleCtrl = require("../Controllers/personne_moraleCtrl");
router.post("/personne_morale", personne_moraleCtrl.Insert);
module.exports = router;
