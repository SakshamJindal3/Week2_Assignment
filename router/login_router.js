const express = require("express");
const  login  = require("../controllers/login_ctrl");
const router = express.Router();
// router.get("/get", authorization, getUser);
router.post("/logedIn", login);
module.exports = router;