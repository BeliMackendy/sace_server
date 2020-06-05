const express = require("express");
const router = express.Router();
const communeCtrl = require("../Controllers/communeCtrl");

router.post("/commune", communeCtrl.select_commune_arrondissement);

module.exports = router;