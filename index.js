const express = require("express")
require("dotenv").config()
const userRoutes=require("./router/signup_router")
const connectDB=require("./config/db") 
const loginRoutes=require("./router/login_router")
const PostPost=require("./router/createpost")
const Updatepost=require("./router/updatepost")
const Update=require("./router/updaterouter")
const getpost=require("./router/getpost")
const delpost = require("./postcontroller/deletepost")

const app=express();
connectDB();

app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
//routes
app.use("/user", userRoutes);
app.use("/login",loginRoutes);
app.use("/post", PostPost);
app.use("/update", Update);
app.use("/postupdate", Updatepost);
app.use("/getpost", getpost);
app.use("/deletepost",delpost);
// setting up port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});