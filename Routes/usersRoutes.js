const express = require("express");
const router = express.Router();
const usersCtrl = require("../Controllers/usersCtrl");

router.post("/addUser", usersCtrl.addUser);

module.exports = router;
