const PortalSchema = require("../models/signup_model");
const mongoose = require("mongoose");
const updateUser = async (req, res) => {
    try {
      const {email} = req.body;
      let user = await PortalSchema.findOne({_id: req.id});
      user.email = email ? email : user.email;
      user.save();
      res.json({
        message: "User updated",
        user,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };
module.exports = updateUser;