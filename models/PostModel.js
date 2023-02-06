const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

const PostSchema = new mongoose.Schema({

    username:{
        required : true,
        type : "String"
    },

    Description:{
        required : true,
        type : "String"
    },
    Title:{
        required : true,
        type : "String"
    }
    
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;