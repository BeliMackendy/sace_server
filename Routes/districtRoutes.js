const express = require("express");
const router = express.Router();
const districtCtrl = require("../Controllers/districtCtrl");

router.post("/district", districtCtrl.select_district_departement);

module.exports = router;