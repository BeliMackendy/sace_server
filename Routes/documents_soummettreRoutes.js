const express = require("express");
const router = express.Router();
const documents_soumettreCtrl = require("../Controllers/documents_soumettreCtrl");
router.post("/documents_soumettre", documents_soumettreCtrl.Insert);
module.exports = router;
