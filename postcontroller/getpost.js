const PostSchema = require("../models/PostModel");
const mongoose = require("mongoose");

const getpost = async (req, res) => {
  try {
    let getpost = await PostSchema.findOne({username: req.id});
    res.json({
      message: "One the post",
      getpost,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
module.exports = getpost
