const express = require("express");
const router = express.Router();
const entreprise_nomscollectifsCtrl = require("../Controllers/entreprise_nomscollectifsCtrl");
router.post("/entreprise_nomscollectifs", entreprise_nomscollectifsCtrl.Insert);
module.exports = router;
