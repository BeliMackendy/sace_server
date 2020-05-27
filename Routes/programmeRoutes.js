const express = require("express");
const router = express.Router();
const programmeCtrl = require("../Controllers/programmeCtrl");
router.get("/programme", programmeCtrl.all);
router.post("/programme/libelle", programmeCtrl.selectprogrammebylibelle_programme);
router.post("/programme/Id", programmeCtrl.selectprogrammebyId_programme);
module.exports = router;