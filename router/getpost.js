const express=require("express");
const getpost=require("../postcontroller/getpost");
const authorization = require("../middleware/authorization");
const router=express.Router();
router.get("/get",authorization,getpost);
module.exports= router;