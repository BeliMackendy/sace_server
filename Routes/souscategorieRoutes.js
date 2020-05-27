const express = require("express");
const router = express.Router();
const souscategorieCtrl = require("../Controllers/souscategorieCtrl");
router.get("/souscategorie", souscategorieCtrl.all);
router.post("/souscategorie/libelle", souscategorieCtrl.selectsouscategoriebyLibelle);
router.post("/souscategorie/Id", souscategorieCtrl.selectsouscategoriebyId_souscategorie);
router.post("/souscategorie/Idcategorie", souscategorieCtrl.selectsouscategoriebyId_categorie);
module.exports = router;