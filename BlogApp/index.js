const express=require("express");
const app=express();
require("dotenv").config();
const port=3000
// middleware
app.use(express.json());
const router=require("./Routes/routes");
app.use("/api/v1",router);
// database connection
const connectDB=require("./Config/database");
connectDB();
// server
app.get("/",(req,res)=>{
    res.send("Blog App is running")
})
app.listen(port,()=>{
    console.log(`Blog App is running at port ${port}`);
})