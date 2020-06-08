const express = require("express");
const router = express.Router();
const communeCtrl = require("../Controllers/communeCtrl");

router.post("/commune", communeCtrl.select_commune_arrondissement);
router.post("/commune_departement", communeCtrl.select_commune_departement);

module.exports = router;