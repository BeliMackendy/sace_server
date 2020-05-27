const express = require("express");
const router = express.Router();
const ouvertureCtrl = require("../Controllers/ouvertureCtrl");
router.post("/ouverture", ouvertureCtrl.Insert);
module.exports = router;
