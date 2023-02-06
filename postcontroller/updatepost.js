const PostSchema = require("../models/PostModel");
const UpdatePost = async (req, res) => {
    try {
      const {Description,Title} = req.body;
      let post = await PostSchema.findOne({_id: req.body.id});
      post.Description = Description ? Description : post.Description;
      post.Title = Title ? Title : post.Title;
      post.save();
      res.json({
        message: "Post updated",
        post,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };
module.exports = UpdatePost;