const express = require("express");
const update = require ("../controllers/updatectrl");
const authorization = require("../middleware/authorization");
const router = express.Router();
router.put("/user",authorization, update);
module.exports = router;