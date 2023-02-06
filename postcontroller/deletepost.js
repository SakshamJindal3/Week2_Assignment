const PostSchema = require("../models/PostModel");
const mongoose = require("mongoose");
const delpost = async (req, res) => {
  try {
    let delpost = await PostSchema.deleteOne({username: req.id});
    res.json({
      message: "Deleted Post",
      delpost,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
module.exports = delpost
