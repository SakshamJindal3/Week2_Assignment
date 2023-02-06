const PortalSchema = require("../models/signup_model");
const mongoo=require("mongoose");
// require("dotenv").config();
const bcrypt=require("bcrypt");
require("../router/signup_router");
// const { Module } = require("module");
const saltRounds = 10;
const createUser = async (req, res) => {
    try
    {   
        const{username,email,password}=req.body
        bcrypt.hash(password, saltRounds,  async function(err, hash) {
                if(!err){
                    const createUser = new PortalSchema({
                        username,
                        email,
                        password:hash
                    });
                    await createUser.save();
                    res.json({
                        message:"User Succefully Signed up!",
                        // data:response
                    });
                }
                else{
                    res.json({
                        message:err.message
                    });
                }
        });
    }

    catch(err){
        res.json({
        message:err.message
        });
    };
}


module.exports = createUser;
