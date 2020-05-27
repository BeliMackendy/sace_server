const express = require("express");
const router = express.Router();
const niveauCtrl = require("../Controllers/niveauCtrl");
router.get("/niveau", niveauCtrl.all);
router.post("/niveau/libelle", niveauCtrl.selectniveaubylibelle_niveau);
router.post("/niveau/Id", niveauCtrl.selectniveaubyId_niveau);
module.exports = router;