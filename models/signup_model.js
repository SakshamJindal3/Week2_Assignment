const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

const PortalSchema = new mongoose.Schema({

    username:{
        required : true,
        type : "String"
    },

    email:{
        required : true,
        type : "String"
    },
    password:{
        required : true,
        type : "String"
    }
    
});

const Portal = mongoose.model("portal", PortalSchema);

module.exports = Portal;