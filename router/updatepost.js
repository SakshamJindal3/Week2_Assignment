const express = require("express");
const postupdate = require ("../postcontroller/updatepost");
const authorization = require("../middleware/authorization");
const router = express.Router();
router.put("/post",authorization, postupdate);
module.exports = postupdate;