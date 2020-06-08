const express = require("express");
const router = express.Router();
const Sec_comCtrl = require("../Controllers/Sec_comCtrl");

router.post("/section_communale", Sec_comCtrl.select_sec_communale_commune);


module.exports = router;