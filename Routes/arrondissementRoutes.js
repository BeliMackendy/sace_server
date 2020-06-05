const express = require("express");
const router = express.Router();
const arrondissementCtrl = require("../Controllers/arrondissementCtrl");

router.post("/arrondissement", arrondissementCtrl.select_arrondissement_departement);

module.exports = router;