const express=require("express");
const delpost=require("../postcontroller/deletepost");
const authorization = require("../middleware/authorization");
const router=express.Router();
router.delete("/delete",authorization,delpost);
module.exports= router;