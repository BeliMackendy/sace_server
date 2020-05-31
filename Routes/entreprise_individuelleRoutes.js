const express = require("express");
const router = express.Router();
const entreprise_individuelleCtrl = require("../Controllers/entreprise_individuelleCtrl");
router.post("/entreprise_individuelle", entreprise_individuelleCtrl.Insert);
module.exports = router;
