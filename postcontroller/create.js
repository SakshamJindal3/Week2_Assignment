const PostSchema = require("../models/PostModel");
const mongoose = require("mongoose");
const createPost = async (req, res) => {
    try
    {   
        const{username,Description,Title}=req.body
        const createPost = new PostSchema({username:req.id,Description,Title});
        let responce = await createPost.save();
        res.json({message:"Hurry! Sucessfully Posted!",responce});
    }            
    catch(err){
        res.json({
        message: "Error in posting"
        });
    };
}
module.exports=createPost;
