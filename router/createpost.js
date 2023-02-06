const express=require("express");
const createUser=require("../postcontroller/create");
const authorization = require("../middleware/authorization");
const router=express.Router();
router.post("/create",authorization,createUser);
module.exports= router;