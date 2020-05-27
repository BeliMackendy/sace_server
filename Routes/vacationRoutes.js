const express = require("express");
const router = express.Router();
const vacationCtrl = require("../Controllers/vacationCtrl");
router.get("/vacation", vacationCtrl.all);
router.post("/vacation/libelle", vacationCtrl.selectvacationbylibelle_vacation);
router.post("/vacation/Id", vacationCtrl.selectvacationbyId_vacation);
module.exports = router;