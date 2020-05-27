const express = require("express");
const router = express.Router();
const categorieCtrl = require("../Controllers/categorieCtrl");
router.get("/categorie", categorieCtrl.all);
router.post("/categorie/libelle", categorieCtrl.selectcategoriebyLibelle);
router.post("/categorie/Id", categorieCtrl.selectcategoriebyIdCategorie);
module.exports = router;