const express = require("express");
const router = express.Router();
const public_cibleCtrl = require("../Controllers/public_cibleCtrl");
router.get("/public_cible", public_cibleCtrl.all);
router.post("/public_cible/libelle", public_cibleCtrl.selectpublic_ciblebylibelle_cible);
router.post("/public_cible/Id", public_cibleCtrl.selectpublic_ciblebyid_public_cible);
module.exports = router;